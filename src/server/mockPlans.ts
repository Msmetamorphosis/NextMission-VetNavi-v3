import type { ActionPlanResponse } from "@/server/schemas/actionPlanOutput";

export function mockActionPlan(goal: string): ActionPlanResponse {
  const g = goal.toLowerCase();

  if (g.includes("house") || g.includes("va loan") || g.includes("mortgage")) {
    return {
      why_this_plan:
        "Your goal mentions housing or a VA loan, so these steps stay on eligibility, lenders, and shopping with VA in mind.",
      categories: [
        {
          name: "Housing & VA loans",
          steps: [
            {
              title: "Confirm eligibility and COE",
              description:
                "Review VA home loan eligibility and request a Certificate of Eligibility before you shop.",
              link: "[VA home loan eligibility](https://www.va.gov/housing-assistance/home-loans/eligibility/)",
              timeframe: "1-2 weeks",
              priority: "high",
            },
            {
              title: "Talk to VA-approved lenders",
              description:
                "Compare pre-approval terms from multiple VA-approved lenders to understand your budget.",
              link: "[Find a VA lender](https://www.va.gov/housing-assistance/home-loans/)",
              timeframe: "2-3 weeks",
              priority: "high",
            },
            {
              title: "House-hunt with VA-friendly sellers",
              description:
                "Work with agents who understand VA appraisal and timeline requirements.",
              timeframe: "Varies",
              priority: "medium",
            },
          ],
        },
      ],
      follow_up: "Are you buying your first home with VA, and what state are you targeting?",
    };
  }

  return {
    why_this_plan:
      "Without the live AI service this demo returns a short general path; add ANTHROPIC_API_KEY for full plans.",
    categories: [
      {
        name: "Get oriented",
        steps: [
          {
            title: "State your outcome clearly",
            description:
              "Rewrite your goal in one sentence: outcome, timeline, and location if it matters.",
            timeframe: "Today",
            priority: "high",
          },
          {
            title: "Use the resource directory",
            description:
              "Browse national and state-specific links on the Resources page while you wait on AI.",
            link: "[Resources](/resources)",
            timeframe: "Today",
            priority: "medium",
          },
        ],
      },
    ],
    follow_up: "What state are you in and which benefit area is most urgent: career, education, housing, health, or disability?",
  };
}
