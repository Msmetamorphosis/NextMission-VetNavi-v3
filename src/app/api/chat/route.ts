import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateChatReply } from "@/server/generateChat";

const BodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(12000),
      })
    )
    .min(1)
    .max(30),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const { messages } = BodySchema.parse(json);
    const text = await generateChatReply(messages);
    return NextResponse.json({ message: text });
  } catch {
    return NextResponse.json({ error: "Invalid chat request" }, { status: 400 });
  }
}
