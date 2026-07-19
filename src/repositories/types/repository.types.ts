export interface DocumentMetadata {
  id: string;
  fileName: string;
  filePath: string;
  pageCount: number;
  totalCharacters: number;
  totalWords: number;
  totalChunks: number;
  uploadedAt: Date;
}
