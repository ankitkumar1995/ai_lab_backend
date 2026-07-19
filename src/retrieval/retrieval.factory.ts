import { PineconeRetriever } from "./pinecone.retriever";

export function createRetriever() {
  return new PineconeRetriever();
}
