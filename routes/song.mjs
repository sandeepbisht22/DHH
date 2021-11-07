import { Router } from "express";
import { songModal } from "../models/Songs.mjs";

const songRouter = Router();

// get all songs by the following artist id
songRouter.get("/:artistType/:id", [], async (req, res) => {
  try {
    //check for all the songs with artist id provided.
    let songs = null;
    if (req.params.artistType === "rapper") {
      songs = await songModal.findOne({ rapper: req.params.id });
    } else {
      songs = await songModal.findOne({ beatproducer: req.params.id });
    }

    res.json(songs);
  } catch (error) {
    console.log(
      "[song] Eror while fetching user due to exception " + error.message
    );
    res.status(500).json({
      msg: "internal server error",
    });
  }
});
export { songRouter };
