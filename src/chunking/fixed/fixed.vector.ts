import { pineconeIndex } from "../../config/pinecone.config";
export async function checkPineconeConnection() {
  const stats = await pineconeIndex.describeIndexStats();
  return stats;
}
