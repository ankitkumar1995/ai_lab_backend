import { retrieveContext } from "../retrieval/retrieval.service";
import { buildRagPrompt } from "../prompts/prompt.builder";
import { createAIProvider } from "../providers/ai/provider.factory";
import { RAG_SYSTEM_INSTRUCTION } from "../prompts/prompt.templates";

export async function chat(question: string) {
  const contexts = await retrieveContext(question);

  const prompt = buildRagPrompt({
    question,
    contexts,
  });

  const provider = createAIProvider();

  const answer = await provider.generateText({
    systemInstruction: RAG_SYSTEM_INSTRUCTION,
    prompt,
  });

  return {
    answer,
    sources: contexts.map((c) => ({
      documentId: c.documentId,
      chunkIndex: c.chunkIndex,
      score: c.score,
    })),
  };
}
