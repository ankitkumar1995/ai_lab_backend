import { Router } from "express";
import { uploadPdf } from "../../middleware/upload.middleware";
import { uploadDocument } from "./fixed.controller";
import { checkPineconeConnection } from "./fixed.vector";
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
export default router;
