import express from "express";
import { rapperModel } from "../models/Rappers.mjs";
const rapperRouter = express.Router();
/***
 * @route Get artist/rappers
 * @description Will GET information of all the rappers with given title ID
 */
rapperRouter.get("/:title", async (req, res) => {
  try {
    console.log(
      "[Process start] Will fetch Rappers info for rappers with title " +
        req.params.title
    );
    const rappers = await rapperModel.find({ title: req.params.title }).exec();
    res.json(rappers);
    console.log("[Success] Rappers info sent to front end");
  } catch (error) {
    console.error("[Error] Not able to fetch rappers details" + error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

export { rapperRouter };
