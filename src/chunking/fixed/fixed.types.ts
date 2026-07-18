export interface ParsedDocument {
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
