import { DocumentRepository } from "./interfaces/document.repository";

import { MemoryDocumentRepository } from "./memory/memory.document.repository";

const repository = new MemoryDocumentRepository();

export function createDocumentRepository(): DocumentRepository {
  return repository;
}
