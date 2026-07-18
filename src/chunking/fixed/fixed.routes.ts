import { Router } from "express";
import { uploadPdf } from "../../middleware/upload.middleware";
import { previewChunks, uploadDocument } from "./fixed.controller";
import { checkPineconeConnection } from "./fixed.vector";
import { testEmbedding } from "./fixed.embedding";

const router = Router();

router.post("/upload", uploadPdf.single("document"), uploadDocument);
router.get("/vector-health", async (_, res) => {
  try {
    const data = await checkPineconeConnection();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Pinecone connection failed",
    });
  }
});

router.get("/embedding-health", async (_, res) => {
  try {
    const result = await testEmbedding();

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,

      message: "Embedding generation failed.",
    });
  }
});

router.post("/chunks", previewChunks);
export default router;
