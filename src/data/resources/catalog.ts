export type ResourceType = "Government" | "Organization" | "Program";

export type CatalogResource = {
  name: string;
  url: string;
  description: string;
  type: ResourceType;
  tags: string[];
  /** State codes (e.g. TX, FL) or ALL for national */
  regions: string[];
};

export type CategoryKey =
  | "career"
  | "education"
  | "housing"
  | "healthcare"
  | "finance"
  | "community";

export type ResourceCategory = {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  resources: CatalogResource[];
};

export const resourceCategories: Record<CategoryKey, ResourceCategory> = {
  career: {
    title: "Career Transition",
    description: "Job placement, resume building, and interview preparation",
    bgColor: "bg-[var(--military-green)]",
    textColor: "text-white",
    resources: [
      {
        name: "VA Work-Study Program",
        description: "Earn money while attending school and gain work experience.",
        url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/work-study/",
        type: "Government",
        tags: ["career", "school", "work", "gi bill"],
        regions: ["ALL"],
      },
      {
        name: "Military Skills Translator",
        description: "Translate military experience into civilian job qualifications.",
        url: "https://www.onetonline.org/crosswalk/MOC/",
        type: "Program",
        tags: ["career", "job", "resume", "mos"],
        regions: ["ALL"],
      },
      {
        name: "VET TEC Program",
        description: "Full-time training in high-demand technology fields.",
        url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/",
        type: "Government",
        tags: ["tech", "cybersecurity", "training", "it"],
        regions: ["ALL"],
      },
      {
        name: "Corporate Gray",
        description: "Military-to-civilian career transition and job placement.",
        url: "https://corporategray.com/",
        type: "Organization",
        tags: ["career", "job", "networking"],
        regions: ["ALL"],
      },
    ],
  },
  education: {
    title: "Education Benefits",
    description: "GI Bill, scholarships, and certification programs",
    bgColor: "bg-[var(--dark-brown)]",
    textColor: "text-white",
    resources: [
      {
        name: "GI Bill Comparison Tool",
        description: "Compare education benefits and schools side by side.",
        url: "https://www.va.gov/gi-bill-comparison-tool/",
        type: "Government",
        tags: ["gi bill", "school", "degree", "college"],
        regions: ["ALL"],
      },
      {
        name: "Yellow Ribbon Program",
        description: "Extra tuition help at participating private schools.",
        url: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/",
        type: "Government",
        tags: ["tuition", "college", "gi bill"],
        regions: ["ALL"],
      },
      {
        name: "Student Veterans of America",
        description: "Campus chapters and support for student veterans.",
        url: "https://studentveterans.org/",
        type: "Organization",
        tags: ["education", "community", "school"],
        regions: ["ALL"],
      },
    ],
  },
  housing: {
    title: "Housing Assistance",
    description: "VA home loans, rental assistance, and transitional housing",
    bgColor: "bg-[var(--coyote-tan)]",
    textColor: "text-white",
    resources: [
      {
        name: "VA Home Loans",
        description: "Zero down payment home loans for eligible veterans.",
        url: "https://www.va.gov/housing-assistance/home-loans/",
        type: "Government",
        tags: ["house", "va loan", "mortgage", "buy"],
        regions: ["ALL"],
      },
      {
        name: "HUD-VASH Program",
        description: "Housing vouchers and case management for homeless veterans.",
        url: "https://www.va.gov/homeless/hud-vash.asp",
        type: "Government",
        tags: ["housing", "rent", "homeless"],
        regions: ["ALL"],
      },
      {
        name: "Texas Veterans Land Board",
        description: "Land, home, and home improvement loans for Texas veterans.",
        url: "https://vlb.texas.gov/",
        type: "Government",
        tags: ["housing", "va loan", "texas", "home"],
        regions: ["TX", "TEXAS"],
      },
      {
        name: "Florida Department of Veterans' Affairs",
        description: "State veteran services including housing and advocacy in Florida.",
        url: "https://www.floridavets.org/",
        type: "Government",
        tags: ["housing", "florida", "benefits", "state"],
        regions: ["FL", "FLORIDA"],
      },
    ],
  },
  healthcare: {
    title: "Healthcare & Wellness",
    description: "VA healthcare, mental health support, and wellness programs",
    bgColor: "bg-[var(--sage-green)]",
    textColor: "text-white",
    resources: [
      {
        name: "VA Healthcare Enrollment",
        description: "Apply for VA healthcare benefits and services.",
        url: "https://www.va.gov/health-care/apply/application/",
        type: "Government",
        tags: ["health", "medical", "enrollment"],
        regions: ["ALL"],
      },
      {
        name: "Veterans Crisis Line",
        description: "24/7 crisis support — call 988 then press 1, or text 838255.",
        url: "https://www.veteranscrisisline.net/",
        type: "Government",
        tags: ["mental health", "crisis", "ptsd"],
        regions: ["ALL"],
      },
      {
        name: "James A. Haley Veterans' Hospital (Tampa)",
        description: "Major VA medical center serving the Tampa Bay area.",
        url: "https://www.va.gov/tampa-health-care/",
        type: "Government",
        tags: ["health", "tampa", "macdill", "florida"],
        regions: ["FL", "FLORIDA", "TAMPA"],
      },
    ],
  },
  finance: {
    title: "Financial Support",
    description: "Disability compensation, pensions, and financial counseling",
    bgColor: "bg-[var(--olive-drab)]",
    textColor: "text-white",
    resources: [
      {
        name: "VA Disability Compensation",
        description: "Monthly payments for service-connected disabilities.",
        url: "https://www.va.gov/disability/",
        type: "Government",
        tags: ["disability", "claim", "benefits"],
        regions: ["ALL"],
      },
      {
        name: "VA Pension Benefits",
        description: "Support for wartime veterans with limited income.",
        url: "https://www.va.gov/pension/",
        type: "Government",
        tags: ["pension", "income", "financial"],
        regions: ["ALL"],
      },
      {
        name: "Military Saves",
        description: "Financial education for military and veteran families.",
        url: "https://militarysaves.org/",
        type: "Organization",
        tags: ["budget", "savings", "financial"],
        regions: ["ALL"],
      },
    ],
  },
  community: {
    title: "Community & Support",
    description: "Veteran organizations, mentorship, and peer networks",
    bgColor: "bg-[var(--warm-brown)]",
    textColor: "text-white",
    resources: [
      {
        name: "American Legion",
        description: "Advocacy, benefits help, and local posts nationwide.",
        url: "https://www.legion.org/",
        type: "Organization",
        tags: ["community", "vso", "local"],
        regions: ["ALL"],
      },
      {
        name: "VFW",
        description: "Support for veterans who served in overseas conflicts.",
        url: "https://www.vfw.org/",
        type: "Organization",
        tags: ["community", "vso"],
        regions: ["ALL"],
      },
      {
        name: "Team Rubicon",
        description: "Disaster response volunteer opportunities for veterans.",
        url: "https://teamrubiconusa.org/",
        type: "Organization",
        tags: ["volunteer", "community", "service"],
        regions: ["ALL"],
      },
    ],
  },
};
