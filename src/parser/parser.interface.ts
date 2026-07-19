import { ParsedDocument } from "./types";

export interface DocumentParser {
  parse(filePath: string): Promise<ParsedDocument>;
}
