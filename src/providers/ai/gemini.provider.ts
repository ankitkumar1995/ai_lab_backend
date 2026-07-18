import { GoogleGenAI } from "@google/genai";

import { env } from "../../config/env";

import { AIProvider, GenerateTextOptions } from "./ai.interface";

export class GeminiProvider implements AIProvider {
  private readonly client: GoogleGenAI;

  constructor() {
    this.client = new GoogleGenAI({
      apiKey: env.GOOGLE_API_KEY,
    });
  }

  async generateText(options: GenerateTextOptions): Promise<string> {
    const response = await this.client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: options.prompt,
      config: {
        systemInstruction: options.systemInstruction,
      },
    });

    return response.text ?? "";
  }
}
