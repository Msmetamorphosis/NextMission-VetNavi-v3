import { z } from "zod";

export const ActionPlanStepSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  link: z.string().optional(),
  timeframe: z.string().optional(),
  priority: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export const ActionPlanCategorySchema = z.object({
  name: z.string().min(1),
  steps: z.array(ActionPlanStepSchema).min(1),
});

export const ActionPlanResponseSchema = z.object({
  why_this_plan: z.string().optional(),
  categories: z.array(ActionPlanCategorySchema).min(1),
  follow_up: z.string().min(1),
});

export type ActionPlanResponse = z.infer<typeof ActionPlanResponseSchema>;

export function normalizePlan(raw: unknown): ActionPlanResponse {
  const parsed = ActionPlanResponseSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Plan failed validation");
  }
  const data = parsed.data;
  return {
    why_this_plan: data.why_this_plan,
    follow_up: data.follow_up,
    categories: data.categories.map((cat) => ({
      ...cat,
      steps: cat.steps.map((step) => ({
        ...step,
        timeframe: step.timeframe?.trim() || "As needed",
        priority: (step.priority || "medium").toLowerCase(),
        link: step.link || "",
      })),
    })),
  };
}

export function extractJsonObject(text: string): unknown {
  const trimmed = text.trim();
  const direct = tryParse(trimmed);
  if (direct !== undefined) return direct;
  const match = trimmed.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("No JSON object in model output");
  const recovered = tryParse(match[0]);
  if (recovered === undefined) throw new Error("Invalid JSON in model output");
  return recovered;
}

function tryParse(s: string): unknown {
  try {
    return JSON.parse(s) as unknown;
  } catch {
    return undefined;
  }
}
