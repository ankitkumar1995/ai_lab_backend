import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

import { DocumentParser } from "../parser.interface";
import { ParsedDocument } from "../types";

export class PdfParser implements DocumentParser {
  async parse(filePath: string): Promise<ParsedDocument> {
    const loader = new PDFLoader(filePath);
    const documents = await loader.load();
    const text = documents.map((doc) => doc.pageContent).join("\n");

    return {
      pageCount: documents.length,
      text,
      metadata: {
        source: filePath,
      },
    };
  }
}
