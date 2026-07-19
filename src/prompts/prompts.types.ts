export interface PromptContext {
  content: string;
  score: number;
  documentId: string;
  chunkIndex: number;
}

export interface BuildPromptOptions {
  question: string;
  contexts: PromptContext[];
}
