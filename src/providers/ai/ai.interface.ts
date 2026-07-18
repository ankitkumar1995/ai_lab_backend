export interface GenerateTextOptions {
  systemInstruction?: string;
  prompt: string;
}

export interface AIProvider {
  generateText(options: GenerateTextOptions): Promise<string>;
}
