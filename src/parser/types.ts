export interface ParsedDocument {
  pageCount: number;
  text: string;
  metadata?: Record<string, unknown>;
}
