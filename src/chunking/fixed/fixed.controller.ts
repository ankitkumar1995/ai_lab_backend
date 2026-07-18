import { Request, Response } from "express";
import { createChunks, uploadPdf } from "./fixed.service";

export async function uploadDocument(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const document = await uploadPdf(req.file);
    return res.status(200).json({
      success: true,
      message: "Document uploaded successfully",
      data: document,
    });
  } catch (error) {
    console.error("Error uploading document:", error);
    return res.status(500).json({ error: "Error uploading document" });
  }
}

export async function previewChunks(req: Request, res: Response) {
  const { text } = req.body;

  const chunks = createChunks(text);

  return res.json({
    totalChunks: chunks.length,

    chunks,
  });
}
