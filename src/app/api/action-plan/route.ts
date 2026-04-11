import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateActionPlan } from "@/server/generateActionPlan";

const BodySchema = z.object({
  goal: z.string().min(5).max(8000),
  userContext: z
    .object({
      militaryBranch: z.string().optional(),
      yearsOfService: z.string().optional(),
      currentLocation: z.string().optional(),
      targetIndustry: z.string().optional(),
    })
    .optional(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const body = BodySchema.parse(json);
    const plan = await generateActionPlan(body.goal, body.userContext || {});
    return NextResponse.json(plan);
  } catch (e) {
    const msg = e instanceof z.ZodError ? "Invalid request" : "Generation failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
