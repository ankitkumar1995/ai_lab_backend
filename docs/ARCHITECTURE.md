# AI Labs Architecture

This document describes the overall architecture of the RAG platform.

---

# High-Level Architecture

```
                Next.js Frontend
                        │
                        ▼
               Express REST API
                        │
 ┌──────────────────────┼──────────────────────┐
 │                      │                      │
 ▼                      ▼                      ▼
Parser              Chat Module          Document Module
 │                      │                      │
 ▼                      ▼                      ▼
Chunking          Retrieval Service      Repository
 │                      │
 ▼                      ▼
Embedding        Prompt Builder
 │                      │
 ▼                      ▼
Pinecone          AI Provider
                        │
                        ▼
                    Gemini
```

---

# Backend Structure

```
src/

chat/

chunking/

config/

middlewares/

parser/

prompts/

providers/

repositories/

retrieval/

routes/

types/

utils/
```

---

# Parser Layer

Responsible for converting files into plain text.

```
PDF

↓

ParserFactory

↓

PdfParser

↓

ParsedDocument
```

Future

- DOCX Parser
- TXT Parser
- Markdown Parser
- HTML Parser

---

# Chunking Layer

Responsible for splitting documents.

```
Document

↓

Normalize

↓

Chunker

↓

Chunks
```

Chunkers

- Fixed
- Recursive
- Token
- Semantic
- Document

Only this layer changes between chunking strategies.

---

# Embedding Layer

Responsible for converting text into vectors.

```
Chunk

↓

Embedding Provider

↓

Embedding Vector
```

Current

- Gemini

Future

- OpenAI
- Ollama

---

# Vector Database

Responsible for storing embeddings.

```
Embedding

↓

Pinecone

↓

Vector Search
```

Future

- Chroma
- Weaviate
- Qdrant

---

# Retrieval Layer

```
Question

↓

Embedding

↓

Pinecone

↓

Top K Chunks
```

Future

- Hybrid Search
- Metadata Filtering
- Re-ranking

---

# Prompt Layer

```
Question

+

Retrieved Chunks

↓

Prompt Builder

↓

Prompt
```

Responsibilities

- Context formatting
- Prompt templates
- Hallucination prevention

---

# AI Layer

```
Prompt

↓

AI Provider Factory

↓

Gemini

↓

Answer
```

Supported Providers

- Gemini
- OpenAI
- Claude

Future

- Ollama
- Bedrock

---

# Chat Flow

```
User

↓

Question

↓

Embedding

↓

Retriever

↓

Prompt Builder

↓

AI Provider

↓

Answer

↓

Frontend
```

---

# Conversation Memory (Future)

```
Question

↓

Memory Retrieval

↓

Retriever

↓

Prompt Builder

↓

AI

↓

Store Memory
```

---

# Evaluation Pipeline (Future)

```
Question

↓

Retriever

↓

Retrieved Chunks

↓

Metrics

├── Precision@K

├── Recall@K

├── MRR

├── Latency

├── Cost

└── Hallucination Score
```

---

# Design Principles

- Single Responsibility Principle
- Dependency Inversion
- Factory Pattern
- Interface Driven Development
- Provider Agnostic Design
- Chunker Agnostic Design
- Testable Components
- Modular Architecture

---

# Project Flow

```
Upload

↓

Parser

↓

Normalize

↓

Chunk

↓

Embedding

↓

Pinecone

↓

Retriever

↓

Prompt Builder

↓

AI Provider

↓

Answer
```

Every chunking strategy (Fixed, Recursive, Token, Semantic, Document) reuses the same architecture. Only the chunking implementation changes.
