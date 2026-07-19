import path from "node:path";

import { DocumentParser } from "./parser.interface";
import { PdfParser } from "./pdf/pdf.parser";

export class ParserFactory {
  static create(fileName: string): DocumentParser {
    const extension = path.extname(fileName).toLowerCase();

    switch (extension) {
      case ".pdf":
        return new PdfParser();

      default:
        throw new Error(`Unsupported file type: ${extension}`);
    }
  }
}
