import { DocumentMetadata } from "../types/repository.types";

export interface DocumentRepository {
  save(document: DocumentMetadata): Promise<void>;
  findById(id: string): Promise<DocumentMetadata | null>;
  findAll(): Promise<DocumentMetadata[]>;
  delete(id: string): Promise<void>;
}
