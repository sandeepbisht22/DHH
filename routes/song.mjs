import { Router } from "express";
import { songModel } from "../models/Songs.mjs";
import { authMiddleware } from "../middleware/auth.mjs";
import { userChoiceModel } from "../models/UserChoices.mjs";

const songRouter = Router();

// get all songs by the following artist id
songRouter.get("/:artistType/:id", [], async (req, res) => {
  try {
    //check for all the songs with artist id provided.
    let songs = null;
    if (req.params.artistType === "rappers") {
      songs = await songModel.find({ rapper: req.params.id });
    } else {
      songs = await songModel.find({ beatproducer: req.params.id });
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
songRouter.post("/likeSong/:songId", authMiddleware, async (req, res) => {
  //like only if not present in like

  const isLiked = await userChoiceModel.findOne({
    likedSong: req.params.songId,
  });

  if (isLiked === null) {
    await songModel.updateOne(
      { _id: req.params.songId },
      { $inc: { like: 1 } }
    );
  }

  const isDisliked = await userChoiceModel.findOne({
    dislikedSong: req.params.songId,
  });
  if (isDisliked !== null) {
    //remove from dislike user choice
    await userChoiceModel.update(
      {
        user: req.user.id,
      },
      {
        $pull: {
          dislikedSong: req.params.songId,
        },
      }
    );
    //decrease unlike count
    await songModel.updateOne(
      { _id: req.params.songId },
      { $inc: { dislike: -1 } }
    );
  }
  const songInfo = await songModel.findOne({ _id: req.params.songId });
  res.json(songInfo._doc);
});

songRouter.post("/dislikeSong/:songId", authMiddleware, async (req, res) => {
  //dislike only if not present in like
  const isDisliked = await userChoiceModel.findOne({
    dislikedSong: req.params.songId,
  });
  if (isDisliked === null) {
    await songModel.updateOne(
      { _id: req.params.songId },
      { $inc: { dislike: 1 } }
    );
  }

  const isLiked = await userChoiceModel.findOne({
    likedSong: req.params.songId,
  });
  if (isLiked !== null) {
    //remove from like user choice
    await userChoiceModel.update(
      {
        user: req.user.id,
      },
      {
        $pull: {
          likedSong: req.params.songId,
        },
      }
    );
    //decrease unlike count
    await songModel.updateOne(
      { _id: req.params.songId },
      { $inc: { like: -1 } }
    );
  }
  const songInfo = await songModel.findOne({ _id: req.params.songId });
  res.json(songInfo._doc);
});

export { songRouter };
