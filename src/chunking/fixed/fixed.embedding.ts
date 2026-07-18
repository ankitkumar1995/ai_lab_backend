import { createEmbeddingProvider } from "../../providers/embedding/embedding.factory";

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
