import express from "express";
import { rapperModel } from "../models/Rappers.mjs";
const rapperRouter = express.Router();
/***
 * @route Get artist/rappers
 * @description Will GET information of all the rappers with given title ID
 */
rapperRouter.get("/", async (req, res) => {
  try {
    console.log(
      "[Process start] Will fetch Rappers info for rappers with title " + ""
      // req.rapper.title
    );
    // const rappers = await rapperModel.find(req.rapper.title);
    const rappers = await rapperModel.find({});
    console.log("Rappers info is " + rappers);
    res.json(rappers);
    console.log("[Success] Rappers info sent to front end");
  } catch (error) {
    console.error("[Error] Not able to fetch rappers details" + error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

export { rapperRouter };
