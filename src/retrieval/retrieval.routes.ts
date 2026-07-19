import { Router } from "express";

import { search } from "./retrieval.controller";

const router = Router();

router.post("/search", search);

export default router;
