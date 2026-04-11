type AnthropicMessage = { role: "user" | "assistant"; content: string };

const API = "https://api.anthropic.com/v1/messages";

export async function anthropicMessages(params: {
  apiKey: string;
  model: string;
  system: string;
  messages: AnthropicMessage[];
  maxTokens: number;
  signal?: AbortSignal;
}): Promise<string> {
  const res = await fetch(API, {
    method: "POST",
    signal: params.signal,
    headers: {
      "content-type": "application/json",
      "x-api-key": params.apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: params.model,
      max_tokens: params.maxTokens,
      system: params.system,
      messages: params.messages,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Anthropic ${res.status}: ${errText.slice(0, 200)}`);
  }

  const data = (await res.json()) as {
    content: Array<{ type: string; text?: string }>;
  };
  const block = data.content?.find((c) => c.type === "text");
  const text = block?.text?.trim();
  if (!text) throw new Error("Empty model response");
  return text;
}
