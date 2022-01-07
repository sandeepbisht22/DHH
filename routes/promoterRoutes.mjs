import express from "express";
import { promoterModel } from "../models/promoterModel.mjs";
import { body, validationResult } from "express-validator";

const promoterRouter = express.Router();

promoterRouter.get("/reactionchannel/all", [], async (req, res) => {
  const reactionChannels = await promoterModel.find({
    type: "reactionchannel",
  });
  res.json(reactionChannels);
});

promoterRouter.get("/instagrampages/all", [], async (req, res) => {
  const reactionChannels = await promoterModel.find({
    type: "instagrampages",
  });
  res.json(reactionChannels);
});

promoterRouter.get("/blogs/all", [], async (req, res) => {
  const reactionChannels = await promoterModel.find({
    type: "blogs",
  });
  res.json(reactionChannels);
});

promoterRouter.get("/news/all", [], async (req, res) => {
  const reactionChannels = await promoterModel.find({
    type: "news",
  });
  res.json(reactionChannels);
});
export default promoterRouter;
