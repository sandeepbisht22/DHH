import mongoose from "mongoose";

const labelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sociallinks: {
    type: Array,
    required: true,
  },
  owner: {
    type: String,
  },
  profileImage: {
    type: String,
    required: true,
  },
  foundedYear: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const labelModel = mongoose.model("label", labelSchema);

export { labelModel };
