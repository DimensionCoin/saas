import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("No OPENAI API KEY found", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("resolution is required", { status: 400 });
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

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    await incrementApiLimit();

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
