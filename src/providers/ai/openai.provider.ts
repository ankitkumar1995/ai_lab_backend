import { AIProvider, GenerateTextOptions } from "./ai.interface";

export class OpenAIProvider implements AIProvider {
  async generateText(_: GenerateTextOptions): Promise<string> {
    throw new Error("OpenAI provider not implemented.");
  }
}
