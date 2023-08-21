
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const apiKey = process.env.VOICERSS_API_KEY; // Store your API key in .env.local
  const voiceRSSUrl = `http://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${text}&c=MP3&f=44khz_16bit_stereo`;

  try {
    const response = await axios.get(voiceRSSUrl, {
      responseType: "arraybuffer",
    });
    const audioData = response.data;

    res.setHeader("Content-Type", "audio/mp3");
    res.send(audioData);
  } catch (error) {
    console.error("VoiceRSS Error:", error);
    res.status(500).json({ error: "Failed to generate speech" });
  }
};
