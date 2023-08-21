import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("No OPENAI API KEY found", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const isPro = await checkSubscription();
    const hasApiCallsLeft = await checkApiLimit(isPro); // Renamed for clarity

    if (!hasApiCallsLeft) {
      if (isPro) {
        return new NextResponse("You've exceeded your pro plan's API limit.", {
          status: 403,
        });
      } else {
        return new NextResponse(
          "Free trial has expired. Please upgrade to pro.",
          { status: 403 }
        );
      }
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    await incrementApiLimit();

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
