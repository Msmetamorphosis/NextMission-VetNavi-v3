import { ACTION_PLAN_SYSTEM } from "@/prompts/actionPlan";
import { anthropicMessages } from "@/server/anthropic";
import { classifyGoal } from "@/server/goalClassify";
import {
  extractJsonObject,
  normalizePlan,
  type ActionPlanResponse,
} from "@/server/schemas/actionPlanOutput";
import {
  formatHintsLine,
  pickResourceHints,
} from "@/server/resourceMatch";
import { mockActionPlan } from "@/server/mockPlans";

export type UserContext = {
  militaryBranch?: string;
  yearsOfService?: string;
  currentLocation?: string;
  targetIndustry?: string;
};

function buildUserPrompt(goal: string, ctx: UserContext): string {
  const focus = classifyGoal(goal);
  const lines = [
    `Goal: ${goal}`,
    `Detected focus: ${focus.label}`,
    `Keywords: ${focus.keywords.join(", ") || "n/a"}`,
    "",
    "Veteran context:",
    ctx.militaryBranch ? `- Branch: ${ctx.militaryBranch}` : null,
    ctx.yearsOfService ? `- Service length: ${ctx.yearsOfService}` : null,
    ctx.currentLocation ? `- Location: ${ctx.currentLocation}` : null,
    ctx.targetIndustry ? `- Target industry: ${ctx.targetIndustry}` : null,
    "",
    `Planner note: ${focus.blurb}`,
  ].filter(Boolean) as string[];

  const hints = pickResourceHints(goal, ctx.currentLocation || "");
  const hintLine = formatHintsLine(hints);
  if (hintLine) {
    lines.push("", "Curated catalog hints (prefer these when relevant):", hintLine);
  }

  return lines.join("\n");
}

function attachCatalogNotes(
  plan: ActionPlanResponse,
  goal: string,
  location: string
): ActionPlanResponse {
  const hints = pickResourceHints(goal, location);
  if (hints.length === 0) return plan;
  const first = plan.categories[0]?.steps[0];
  if (!first) return plan;
  const extra = hints.map((h) => `• ${h.name} — ${h.url}`).join("\n");
  const merged = [first.additionalInfo, "Suggested links from our directory:\n" + extra]
    .filter(Boolean)
    .join("\n\n");
  const nextSteps = plan.categories[0].steps.map((s, i) =>
    i === 0 ? { ...s, additionalInfo: merged } : s
  );
  const categories = [{ ...plan.categories[0], steps: nextSteps }, ...plan.categories.slice(1)];
  return { ...plan, categories };
}

export async function generateActionPlan(
  goal: string,
  ctx: UserContext
): Promise<ActionPlanResponse> {
  const key = process.env.ANTHROPIC_API_KEY;
  const model =
    process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-20241022";

  if (!key) {
    return attachCatalogNotes(mockActionPlan(goal), goal, ctx.currentLocation || "");
  }

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 55_000);

  try {
    const text = await anthropicMessages({
      apiKey: key,
      model,
      system: ACTION_PLAN_SYSTEM,
      maxTokens: 3_000,
      signal: controller.signal,
      messages: [
        {
          role: "user",
          content: buildUserPrompt(goal, ctx),
        },
      ],
    });
    const json = extractJsonObject(text);
    const plan = normalizePlan(json);
    return attachCatalogNotes(plan, goal, ctx.currentLocation || "");
  } catch {
    return attachCatalogNotes(mockActionPlan(goal), goal, ctx.currentLocation || "");
  } finally {
    clearTimeout(t);
  }
}
