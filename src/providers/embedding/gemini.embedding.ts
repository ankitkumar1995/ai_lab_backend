import { GoogleGenAI } from "@google/genai";

import { env } from "../../config/env";

import { EmbeddingProvider } from "./embedding.interface";

export class GeminiEmbeddingProvider implements EmbeddingProvider {
  private client: GoogleGenAI;

  constructor() {
    this.client = new GoogleGenAI({
      apiKey: env.GOOGLE_API_KEY,
    });
  }

  async embed(text: string): Promise<number[]> {
    const response = await this.client.models.embedContent({
      model: "text-embedding-004",

      contents: text,
    });

    return response.embeddings[0].values;
  }

  async embedMany(texts: string[]): Promise<number[][]> {
    const vectors: number[][] = [];

    for (const text of texts) {
      const embedding = await this.embed(text);

      vectors.push(embedding);
    }

    return vectors;
  }
}
