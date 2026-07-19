export interface ParsedDocument {
  documentId: string;
  fileName: string;
  filePath: string;
  pageCount: number;
  characterCount: number;
  wordCount: number;
  text: string;
}

export interface UploadResponse {
  success: boolean;
  message: string;
  data: ParsedDocument;
}

export interface FixedChunk {
  id: string;
  chunkIndex: number;
  start: number;
  end: number;
  content: string;
  characterCount: number;
  wordCount: number;
}

export interface ChunkOptions {
  chunkSize: number;
  chunkOverlap: number;
}
export interface EmbeddedChunk extends FixedChunk {
  embedding: number[];
}
export interface DocumentIngestionResult {
  documentId: string;
  fileName: string;
  totalChunks: number;
  totalPages: number;
  totalCharacters: number;
  totalWords: number;
  uploadedAt: Date;
}
