import { SearchOptions, SearchResult } from "./retrieval.types";

export interface Retriever {
  search(embedding: number[], options?: SearchOptions): Promise<SearchResult[]>;
}
