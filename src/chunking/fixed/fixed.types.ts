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
