import { Request, Response } from "express";

import { retrieveContext } from "./retrieval.service";

export async function search(req: Request, res: Response) {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required.",
      });
    }

    const matches = await retrieveContext(question);

    return res.json({
      success: true,
      matches,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Search failed.",
    });
  }
}
