import mongoose from "mongoose";

const userChoiceSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  favrapper: [{ type: mongoose.Schema.Types.ObjectId, ref: "rappers" }],
  favbeatproducer: [
    { type: mongoose.Schema.Types.ObjectId, ref: "beatproducers" },
  ],
  favsong: [{ type: mongoose.Schema.Types.ObjectId, ref: "songs" }],
});

const userChoiceModel = mongoose.model("userchoice", userChoiceSchema);

export { userChoiceModel };
