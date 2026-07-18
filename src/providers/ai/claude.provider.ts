import { AIProvider, GenerateTextOptions } from "./ai.interface";

export class ClaudeProvider implements AIProvider {
  async generateText(_: GenerateTextOptions): Promise<string> {
    throw new Error("Claude provider not implemented.");
  }
}
