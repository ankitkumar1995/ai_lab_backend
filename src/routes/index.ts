import { Router } from "express";
import healthRoute from "./health.route";
import fixedRoutes from "../chunking/fixed/fixed.routes";

const router = Router();

router.use("/", healthRoute);
router.use("/fixed", fixedRoutes);

export default router;
