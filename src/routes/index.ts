import { Router } from "express";
import healthRoute from "./health.route";
import fixedRoutes from "../chunking/fixed/fixed.routes";
import retrievalRoutes from "../retrieval/retrieval.routes";

const router = Router();

router.use("/", healthRoute);
router.use("/fixed", fixedRoutes);
router.use("/retrieval", retrievalRoutes);
export default router;
