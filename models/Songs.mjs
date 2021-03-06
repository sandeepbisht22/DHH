import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rapper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rappers",
  },
  beatproducer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "beatproducers",
  },
  songlinks: {
    type: Array,
  },
  like: {
    type: Number,
    default: 0,
  },
  dislike: {
    type: Number,
    default: 0,
  },
});

const songModel = mongoose.model("song", songSchema);

export { songModel };
