import express from "express";
import { beatProducerModel } from "../models/BeatProducer.mjs";
const beatProducerRouter = express.Router();
/**
 * @route /artist/beatProdcuer
 * @description Will Get information about all the beat producers
 */
beatProducerRouter.get("/", async (req, res) => {
  try {
    console.log("[Process Start] Will fetch all beat producer info");

    //in future will fetch based on the title
    const beatProducer = await beatProducerModel.find({});
    res.json(beatProducer);
    console.log("[Sucess] Beat Producer data fetched and send to front end");
  } catch (error) {
    console.log("[Error] while fetching beat producer info");
    res.status(500).json({ msg: "Server Error" });
  }
});

export { beatProducerRouter };
