import { BuildPromptOptions } from "./prompt.types";

export function buildRagPrompt({
  question,
  contexts,
}: BuildPromptOptions): string {
  const context = contexts
    .map((chunk, index) => {
      return `Document ${index + 1}

${chunk.content}`;
    })
    .join("\n\n------------------\n\n");

  return `You are a helpful AI assistant.

Answer ONLY using the provided context.

If the answer is not present,
reply:

"I couldn't find the answer in the provided documents."

Context

${context}

Question

${question}

Answer:
`;
}
