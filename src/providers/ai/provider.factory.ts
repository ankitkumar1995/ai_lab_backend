import { env } from "../../config/env";

import { AIProvider } from "./ai.interface";

import { GeminiProvider } from "./gemini.provider";
import { OpenAIProvider } from "./openai.provider";
import { ClaudeProvider } from "./claude.provider";

export function createAIProvider(): AIProvider {
  switch (env.MODEL_PROVIDER) {
    case "gemini":
      return new GeminiProvider();

    case "openai":
      return new OpenAIProvider();

    case "claude":
      return new ClaudeProvider();

    default:
      throw new Error("Unsupported AI Provider");
  }
}
