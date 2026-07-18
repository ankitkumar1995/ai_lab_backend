import { env } from "../../config/env";

import { EmbeddingProvider } from "./embedding.interface";

import { GeminiEmbeddingProvider } from "./gemini.embedding";

export function createEmbeddingProvider(): EmbeddingProvider {
  switch (env.MODEL_PROVIDER) {
    case "gemini":
      return new GeminiEmbeddingProvider();

    default:
      throw new Error("Embedding provider not supported.");
  }
}
