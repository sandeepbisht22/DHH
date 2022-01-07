import express from "express";
import { promoterModel } from "../models/promoterModel.mjs";
import { body, validationResult } from "express-validator";

const promoterRouter = express.Router();

promoterRouter.get("/reactionchannel/all", [], async (req, res) => {
  const reactionChannels = await promoterModel.find({});
  res.json(reactionChannels);
});

export default promoterRouter;
