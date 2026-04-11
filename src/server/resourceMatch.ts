import {
  resourceCategories,
  type CatalogResource,
} from "@/data/resources/catalog";

function normalizeRegionTokens(location: string): Set<string> {
  const raw = location.toUpperCase().replace(/[^A-Z0-9\s]/g, " ");
  const tokens = new Set<string>();
  for (const w of raw.split(/\s+/).filter(Boolean)) {
    tokens.add(w);
    if (w.length === 2) tokens.add(w);
  }
  if (raw.includes("TAMPA") || raw.includes("MACDILL")) {
    tokens.add("FL");
    tokens.add("FLORIDA");
    tokens.add("TAMPA");
  }
  if (raw.includes("TEXAS") || raw === "TX") tokens.add("TX");
  if (raw.includes("FLORIDA") || raw === "FL") tokens.add("FL");
  return tokens;
}

function resourceScore(goal: string, r: CatalogResource): number {
  const g = goal.toLowerCase();
  let score = 0;
  for (const tag of r.tags) {
    if (g.includes(tag)) score += 2;
    const words = g.split(/\s+/);
    if (words.includes(tag)) score += 1;
  }
  return score;
}

export function pickResourceHints(goal: string, location: string): CatalogResource[] {
  const region = normalizeRegionTokens(location || "");
  const pool: CatalogResource[] = [];
  for (const cat of Object.values(resourceCategories)) {
    for (const r of cat.resources) {
      const national = r.regions.includes("ALL");
      const regionalHit = r.regions.some(
        (code) => code !== "ALL" && region.has(code)
      );
      if (national || regionalHit) pool.push(r);
    }
  }

  const scored = pool
    .map((r) => ({ r, s: resourceScore(goal, r) + (r.regions.includes("ALL") ? 0 : 3) }))
    .filter((x) => x.s > 0 || x.r.regions.some((c) => c !== "ALL" && region.has(c)))
    .sort((a, b) => b.s - a.s);

  const seen = new Set<string>();
  const out: CatalogResource[] = [];
  for (const { r } of scored) {
    if (seen.has(r.url)) continue;
    seen.add(r.url);
    out.push(r);
    if (out.length >= 4) break;
  }
  if (out.length < 3) {
    for (const cat of Object.values(resourceCategories)) {
      for (const r of cat.resources) {
        if (!r.regions.includes("ALL")) continue;
        if (seen.has(r.url)) continue;
        seen.add(r.url);
        out.push(r);
        if (out.length >= 3) break;
      }
      if (out.length >= 3) break;
    }
  }
  return out.slice(0, 4);
}

export function formatHintsLine(resources: CatalogResource[]): string {
  if (resources.length === 0) return "";
  return resources
    .map((r) => `${r.name}: ${r.url}`)
    .join(" | ");
}
