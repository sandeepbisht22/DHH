import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  singer: {
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
  },
  dislike: {
    type: Number,
  },
});

const songModal = mongoose.model("song", songSchema);

export { songModal };
