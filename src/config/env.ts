import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("5000"),
  MODEL_PROVIDER: z.enum(["gemini", "openai", "anthropic"]),
  GOOGLE_API_KEY: z.string().optional(),

  OPENAI_API_KEY: z.string().optional(),

  CLAUDE_API_KEY: z.string().optional(),

  OPENROUTER_API_KEY: z.string().optional(),

  PINECONE_API_KEY: z.string(),

  PINECONE_INDEX_NAME: z.string(),
});

export const env = envSchema.parse(process.env);
