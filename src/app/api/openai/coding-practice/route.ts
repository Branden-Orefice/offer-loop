import { NextResponse, type NextRequest } from "next/server";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface CodingPracticeRequest {
  practiceType: string;
  codingLanguage: string;
  applicationRole: string;
}

export async function POST(request: NextRequest) {
  const body: CodingPracticeRequest = await request.json();

  const { practiceType, codingLanguage, applicationRole } = body;

  if (!practiceType || !codingLanguage || !applicationRole) {
    return Response.json(
      {
        error: "practiceType, codingLanguage, and applicationRole are required",
      },
      { status: 400 },
    );
  }

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: `You are a coding practice assistant. Return only valid JSON. Do not include markdown.`,
    },
    {
      role: "user",
      content: `Create ${codingLanguage} interview practice questions for a ${applicationRole} practicing ${practiceType}.

  Return JSON with this exact shape:
  {
    "sessionTitle": "string",
    "questions": [
      {
        "id": 1,
        "topic": "string",
        "difficulty": "string",
        "question": "string"
      }
    ]
  }

  Generate 20 questions.`,
    },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-5.4",
    messages,
    temperature: 0,
    stream: false,
    response_format: { type: "json_object" },
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    return NextResponse.json(
      { error: "No content returned from OpenAI" },
      { status: 500 },
    );
  }

  const parsedContent = JSON.parse(content);

  return NextResponse.json(parsedContent);
}
