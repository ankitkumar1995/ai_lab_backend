import { randomUUID } from "node:crypto";

import { ChunkOptions, FixedChunk } from "./fixed.types";

export class FixedChunker {
  constructor(private readonly options: ChunkOptions) {}

  chunk(text: string): FixedChunk[] {
    const chunks: FixedChunk[] = [];

    const { chunkSize, chunkOverlap } = this.options;

    let start = 0;
    let chunkIndex = 0;

    while (start < text.length) {
      const end = Math.min(start + chunkSize, text.length);

      const content = text.slice(start, end).trim();

      if (content.length > 0) {
        chunks.push({
          id: randomUUID(),

          chunkIndex,

          start,

          end,

          content,

          characterCount: content.length,

          wordCount: content.split(/\s+/).filter(Boolean).length,
        });

        chunkIndex++;
      }

      start += chunkSize - chunkOverlap;
    }

    return chunks;
  }
}
