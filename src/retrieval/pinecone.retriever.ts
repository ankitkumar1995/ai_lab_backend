import { pineconeIndex } from "../config/pinecone.config";
import { Retriever } from "./retriever.interface";
import { SearchOptions, SearchResult } from "./retrieval.types";

export class PineconeRetriever implements Retriever {
  async search(
    embedding: number[],
    options: SearchOptions = {
      topK: 5,
    },
  ): Promise<SearchResult[]> {
    const response = await pineconeIndex.query({
      vector: embedding,

      topK: options.topK,
      includeMetadata: true,
    });

    return response.matches.map((match) => ({
      score: match.score ?? 0,
      documentId: String(match.metadata?.documentId),
      chunkIndex: Number(match.metadata?.chunkIndex),
      content: String(match.metadata?.content),
      metadata: match.metadata ?? {},
    }));
  }
}
