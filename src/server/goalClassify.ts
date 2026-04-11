export type GoalFocus = {
  label: string;
  keywords: string[];
  blurb: string;
};

export function classifyGoal(goal: string): GoalFocus {
  const g = goal.toLowerCase();

  if (matches(g, ["house", "home", "va loan", "mortgage", "rent", "housing", "hud"])) {
    return {
      label: "Housing",
      keywords: pick(g, ["house", "va loan", "mortgage", "rent"]),
      blurb: "Focus on housing benefits, loans, and stability programs.",
    };
  }
  if (matches(g, ["disability", "compensation", "rating", "claim", "appeal", "c&p", "ptsd"])) {
    return {
      label: "Disability benefits",
      keywords: pick(g, ["disability", "claim", "compensation", "rating"]),
      blurb: "Focus on claims, evidence, and appeals.",
    };
  }
  if (matches(g, ["health", "medical", "mental", "therapy", "va health", "counseling"])) {
    return {
      label: "Healthcare",
      keywords: pick(g, ["health", "mental", "medical", "therapy"]),
      blurb: "Focus on enrollment, care access, and crisis resources when relevant.",
    };
  }
  if (matches(g, ["gi bill", "school", "degree", "college", "certification", "education"])) {
    return {
      label: "Education",
      keywords: pick(g, ["gi bill", "school", "degree", "certification"]),
      blurb: "Focus on GI Bill, programs, and school choice.",
    };
  }
  if (matches(g, ["job", "career", "resume", "interview", "employment", "linkedin"])) {
    return {
      label: "Career",
      keywords: pick(g, ["job", "career", "resume", "employment"]),
      blurb: "Focus on job search, skills translation, and training.",
    };
  }
  if (matches(g, ["money", "debt", "budget", "financial", "savings", "pension"])) {
    return {
      label: "Financial",
      keywords: pick(g, ["debt", "budget", "financial", "pension"]),
      blurb: "Focus on benefits income, pensions, and trusted financial education.",
    };
  }

  return {
    label: "General transition",
    keywords: ["transition", "support"],
    blurb: "Give practical first steps; ask a clarifying question in follow_up.",
  };
}

function matches(g: string, keys: string[]) {
  return keys.some((k) => g.includes(k));
}

function pick(g: string, keys: string[]) {
  return keys.filter((k) => g.includes(k));
}
