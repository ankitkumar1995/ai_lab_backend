export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
  sources: {
    documentId: string;
    chunkIndex: number;
    score: number;
  }[];
}
