import { Router } from "express";
import { labelModel } from "../models/LabelModel.mjs";

const labelRouter = Router();

labelRouter.get("/all", [], async (req, res) => {
  const allLabels = await labelModel.find({});
  res.json(allLabels);
});

export default labelRouter;
