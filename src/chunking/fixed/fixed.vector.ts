import { pineconeIndex } from "../../config/pinecone.config";
import { EmbeddedChunk } from "./fixed.types";
const BATCH_SIZE = 100;

export async function checkPineconeConnection() {
  const stats = await pineconeIndex.describeIndexStats();
  return stats;
}
export async function storeChunks(
  documentId: string,
  chunks: EmbeddedChunk[],
): Promise<void> {
  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);

    await pineconeIndex.upsert({
      records: batch.map((chunk) => ({
        id: chunk.id,
        values: chunk.embedding,
        metadata: {
          documentId,
          chunkIndex: chunk.chunkIndex,
          content: chunk.content,
          start: chunk.start,
          end: chunk.end,
          characterCount: chunk.characterCount,
          wordCount: chunk.wordCount,
        },
      })),
    });
  }
}
