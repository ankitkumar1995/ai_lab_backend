import { DocumentRepository } from "../interfaces/document.repository";

import { DocumentMetadata } from "../types/repository.types";

export class MemoryDocumentRepository implements DocumentRepository {
  private documents = new Map<string, DocumentMetadata>();

  async save(document: DocumentMetadata): Promise<void> {
    this.documents.set(document.id, document);
  }

  async findById(id: string): Promise<DocumentMetadata | null> {
    return this.documents.get(id) ?? null;
  }

  async findAll(): Promise<DocumentMetadata[]> {
    return Array.from(this.documents.values());
  }

  async delete(id: string): Promise<void> {
    this.documents.delete(id);
  }
}
