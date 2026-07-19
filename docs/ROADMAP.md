# AI Labs - Learning Roadmap

This roadmap tracks every feature required to build a production-ready Retrieval Augmented Generation (RAG) platform from scratch.

---

# Phase 1 - Project Foundation

Status: ✅ Completed

- [x] Express.js Setup
- [x] TypeScript Configuration
- [x] Environment Variables
- [x] Health Check API
- [x] Global Routes
- [x] File Upload Middleware
- [x] Logger
- [x] Error Handling

---

# Phase 2 - AI Providers

Status: ✅ Completed

Supported Providers

- [x] Gemini
- [x] OpenAI
- [x] Claude

Future

- [ ] Ollama
- [ ] AWS Bedrock

Features

- [x] Provider Interface
- [x] Provider Factory
- [x] Environment Based Selection

---

# Phase 3 - Embedding Providers

Status: ✅ Completed

Current

- [x] Gemini Embeddings

Future

- [ ] OpenAI Embeddings
- [ ] Ollama Embeddings

Features

- [x] Embedding Interface
- [x] Embedding Factory
- [x] Batch Embedding

---

# Phase 4 - Parser Module

Status: 🚧 In Progress

Current

- [x] Parser Interface
- [x] Parser Factory
- [x] PDF Parser

Upcoming

- [ ] DOCX Parser
- [ ] TXT Parser
- [ ] Markdown Parser
- [ ] HTML Parser

---

# Phase 5 - Fixed Size Chunking

Status: 🚧 In Progress

Features

- [x] Text Normalization
- [x] Fixed Chunk Algorithm
- [x] Chunk Metadata
- [x] Chunk Preview

Remaining

- [ ] Full Testing
- [ ] Performance Optimization

---

# Phase 6 - Ingestion Pipeline

Status: 🚧 In Progress

Pipeline

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

Features

- [x] Upload API
- [x] Embedding
- [x] Pinecone Upsert

Remaining

- [ ] Document Repository
- [ ] Duplicate Detection
- [ ] Retry Mechanism

---

# Phase 7 - Retrieval

Status: 🚧 In Progress

Features

- [x] Retriever Interface
- [x] Pinecone Retriever
- [x] Retrieval Service

Upcoming

- [ ] Hybrid Search
- [ ] Metadata Filters
- [ ] Namespace Search

---

# Phase 8 - Prompt Engineering

Status: 🚧 In Progress

Current

- [x] Prompt Builder
- [x] Prompt Templates

Upcoming

- [ ] Dynamic Templates
- [ ] Prompt Versioning

---

# Phase 9 - Chat API

Status: 🚧 In Progress

Current

- [x] Chat Service
- [x] Chat Controller
- [x] Chat Routes

Upcoming

- [ ] Streaming Responses
- [ ] Source Highlighting
- [ ] Follow-up Questions

---

# Phase 10 - Document Management

Status: Not Started

Features

- [ ] Upload History
- [ ] List Documents
- [ ] Document Details
- [ ] Delete Documents
- [ ] Re-index Documents

---

# Phase 11 - Conversation Memory

Status: Not Started

Features

- [ ] Session Management
- [ ] Short-Term Memory
- [ ] Long-Term Memory
- [ ] Memory Summarization
- [ ] Memory Search
- [ ] Context Window Management

---

# Phase 12 - Evaluation Framework

Status: Not Started

Metrics

- [ ] Precision@K
- [ ] Recall@K
- [ ] MRR
- [ ] NDCG
- [ ] Retrieval Accuracy
- [ ] Latency
- [ ] Token Usage
- [ ] Cost Tracking
- [ ] Hallucination Detection

---

# Phase 13 - Frontend (Next.js)

Status: Not Started

Pages

- [ ] Dashboard
- [ ] Upload
- [ ] Chunk Preview
- [ ] Search Playground
- [ ] Chat Playground
- [ ] Document Manager
- [ ] Evaluation Dashboard
- [ ] Settings

---

# Phase 14 - Advanced Chunking

Status: Not Started

- [ ] Recursive Character Chunking
- [ ] Token Chunking
- [ ] Semantic Chunking
- [ ] Document Chunking

---

# Phase 15 - Production

Status: Not Started

- [ ] Docker
- [ ] CI/CD
- [ ] Monitoring
- [ ] Logging
- [ ] Metrics
- [ ] Authentication
- [ ] Rate Limiting
