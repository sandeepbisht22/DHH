import express from "express";
import { rapperModel } from "../models/Rappers.mjs";
const rapperRouter = express.Router();
/***
 * @route Get artist/rappers
 * @description Will GET information of all the rappers with given title ID
 */
rapperRouter.get("/title/:title", async (req, res) => {
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

/***
 * @route Get artist/rappers/:name
 * @description Will GET information of single rapper based on provided name
 */
rapperRouter.get("/name/:name", async (req, res) => {
  try {
    console.log(
      "[Process start] Will fetch Rappers info for rappers with name" +
        req.params.name
    );
    const rapperInfo = await rapperModel.find({ name: req.params.name });
    res.json(rapperInfo);
    console.log(
      "[Success] Rappers " + req.params.name + " info sent to front end"
    );
  } catch (error) {
    console.error("[Error] Not able to fetch rappers details" + error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

export { rapperRouter };
