import path from "node:path";

import { parsePdf } from "./fixed.parser";
import { ParsedDocument } from "./fixed.types";
import { FixedChunker } from "./fixed.chunker";

export async function uploadPdf(
  file: Express.Multer.File,
): Promise<ParsedDocument> {
  const parsed = await parsePdf(file.path);

  const words = parsed.text.trim().split(/\s+/).filter(Boolean).length;

  return {
    fileName: file.originalname,
    filePath: file.path,
    pageCount: parsed.pageCount,
    wordCount: words,
    characterCount: parsed.text.length,
    text: parsed.text,
  };
}

export function createChunks(text: string) {
  const chunker = new FixedChunker({
    chunkSize: 500,
    chunkOverlap: 100,
  });

  return chunker.chunk(text);
}
