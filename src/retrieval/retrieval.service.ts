import { createEmbeddingProvider } from "../providers/embedding/embedding.factory";

import { createRetriever } from "./retrieval.factory";

export async function retrieveContext(question: string) {
  const embeddingProvider = createEmbeddingProvider();

  const embedding = await embeddingProvider.embed(question);

  const retriever = createRetriever();

  return retriever.search(embedding, {
    topK: 5,
  });
}
