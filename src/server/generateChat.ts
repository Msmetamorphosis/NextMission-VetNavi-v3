import { CHAT_SYSTEM } from "@/prompts/chat";
import { anthropicMessages } from "@/server/anthropic";

type Msg = { role: "user" | "assistant"; content: string };

export async function generateChatReply(messages: Msg[]): Promise<string> {
  const key = process.env.ANTHROPIC_API_KEY;
  const model =
    process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-20241022";

  if (!key) {
    return (
      "AI chat needs ANTHROPIC_API_KEY on the server. Meanwhile, try the Resources page or the action plan tool on the home page."
    );
  }

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 45_000);
  try {
    return await anthropicMessages({
      apiKey: key,
      model,
      system: CHAT_SYSTEM,
      maxTokens: 900,
      signal: controller.signal,
      messages,
    });
  } finally {
    clearTimeout(t);
  }
}
