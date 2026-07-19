import { createEmbeddingProvider } from "../../providers/embedding/embedding.factory";
import { FixedChunk, EmbeddedChunk } from "./fixed.types";

export async function testEmbedding() {
  const embedding = createEmbeddingProvider();

  const vector = await embedding.embed(
    "Employees are entitled to 18 paid leaves every year.",
  );

  return {
    dimensions: vector.length,

    vector,
  };
}
export async function embedChunks(
  chunks: FixedChunk[],
): Promise<EmbeddedChunk[]> {
  const provider = createEmbeddingProvider();

  const embeddings = await provider.embedMany(
    chunks.map((chunk) => chunk.content),
  );

  return chunks.map((chunk, index) => ({
    ...chunk,
    embedding: embeddings[index],
  }));
}
