
# NextMission Navigator (v3)

Fresh repo: same look and flow as the original VetNavi prototype, with **API keys on the server only**, validated JSON action plans, optional **regional resource hints**, and a separate **chat** endpoint.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 3 
- Anthropic Messages API (Claude) for action plans + chat
- ElevenLabs ConvAI embed (optional)


## Project layout

| Path | Role |
|------|------|
| `src/app/api/action-plan` | POST goal + optional veteran context → structured plan |
| `src/app/api/chat` | POST message history → assistant reply |
| `src/server/generateActionPlan.ts` | Claude call, JSON parse, Zod check, catalog hints |
| `src/data/resources/catalog.ts` | Resource directory + regional rows (TX, FL, Tampa) |
| `src/prompts/*` | Short system prompts (easy to edit without touching UI) |


# NextMission-VetNavi-v3
Final Capstone Version
