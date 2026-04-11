export type UserContext = {
  militaryBranch?: string;
  yearsOfService?: string;
  currentLocation?: string;
  targetIndustry?: string;
};

export type ActionPlanApiResponse = {
  why_this_plan?: string;
  categories: Array<{
    name: string;
    steps: Array<{
      title: string;
      description: string;
      link?: string;
      timeframe?: string;
      priority?: string;
      additionalInfo?: string;
    }>;
  }>;
  follow_up: string;
};

export async function generateActionPlan(
  goal: string,
  userContext: UserContext = {}
): Promise<ActionPlanApiResponse> {
  const res = await fetch("/api/action-plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ goal, userContext }),
  });
  if (!res.ok) throw new Error("action-plan failed");
  return res.json() as Promise<ActionPlanApiResponse>;
}

export async function sendChatMessage(
  messages: Array<{ role: "user" | "assistant"; content: string }>
): Promise<{ message: string }> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) throw new Error("chat failed");
  return res.json() as Promise<{ message: string }>;
}
