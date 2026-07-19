import path from "node:path";
// import { parsePdf } from "./fixed.parser";
import { ParserFactory } from "../../parser/parser.factory";
import { DocumentIngestionResult, ParsedDocument } from "./fixed.types";
import { FixedChunker } from "./fixed.chunker";
import { normalizeText } from "../../utils/text-normalizer";
import { randomUUID } from "node:crypto";
import { embedChunks } from "./fixed.embedding";
import { storeChunks } from "./fixed.vector";
import { logStep } from "../../utils/logger";

export async function parseDocument(
  file: Express.Multer.File,
): Promise<ParsedDocument> {
  //   const parsed = await parsePdf(file.path);
  const parser = ParserFactory.create(file.originalname);

  const parsed = await parser.parse(file.path);
  const wordCount = parsed.text.trim().split(/\s+/).filter(Boolean).length;

  return {
    documentId: randomUUID(),
    fileName: file.originalname,
    filePath: path.resolve(file.path),
    pageCount: parsed.pageCount,
    characterCount: parsed.text.length,
    wordCount,
    text: parsed.text,
  };
}
export async function ingestDocument(
  document: ParsedDocument,
): Promise<DocumentIngestionResult> {
  logStep("Parsing document...");

  logStep("Normalizing text...");
  const normalizedText = normalizeText(document.text);
  logStep("Creating chunks...");
  const chunker = new FixedChunker({
    chunkSize: 500,
    chunkOverlap: 100,
  });

  const chunks = chunker.chunk(normalizedText);
  logStep("Generating embeddings...");
  const embeddedChunks = await embedChunks(chunks);
  logStep("Uploading vectors...");
  await storeChunks(document.documentId, embeddedChunks);
  logStep("Finished.");
  return {
    documentId: document.documentId,
    fileName: document.fileName,
    totalPages: document.pageCount,
    totalCharacters: document.characterCount,
    totalWords: document.wordCount,
    totalChunks: chunks.length,
    uploadedAt: new Date(),
  };
}

export function createChunks(text: string) {
  const chunker = new FixedChunker({
    chunkSize: 500,
    chunkOverlap: 100,
  });

  return chunker.chunk(text);
}
