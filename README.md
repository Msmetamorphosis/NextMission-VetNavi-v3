# NextMission Navigator (v3)

Fresh repo: same look and flow as the original VetNavi prototype, with **API keys on the server only**, validated JSON action plans, optional **regional resource hints**, and a separate **chat** endpoint.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 3 (palette matches the shipped prototype)
- Anthropic Messages API (Claude) for action plans + chat
- ElevenLabs ConvAI embed (optional)

## Setup

```bash
cd NextMission-VetNavi-v3
npm install
cp .env.example .env.local
# add ANTHROPIC_API_KEY
npm run dev
```

Without `ANTHROPIC_API_KEY`, action plans and chat use short **offline fallbacks** so the UI still demos.

## Deploy

Use a host that runs **Node** for Next (not static `next export`). Configure the same env vars. On Netlify, use the official Next runtime plugin so `/api/*` routes work.

## Project layout

| Path | Role |
|------|------|
| `src/app/api/action-plan` | POST goal + optional veteran context → structured plan |
| `src/app/api/chat` | POST message history → assistant reply |
| `src/server/generateActionPlan.ts` | Claude call, JSON parse, Zod check, catalog hints |
| `src/data/resources/catalog.ts` | Resource directory + regional rows (TX, FL, Tampa) |
| `src/prompts/*` | Short system prompts (easy to edit without touching UI) |

## License / assets

Branding and images are project-specific; keep usage aligned with your course and organization policy.
