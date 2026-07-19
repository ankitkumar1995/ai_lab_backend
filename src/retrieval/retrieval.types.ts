export interface SearchResult {
  score: number;
  documentId: string;
  chunkIndex: number;
  content: string;
  metadata: Record<string, unknown>;
}

export interface SearchOptions {
  topK: number;
}
