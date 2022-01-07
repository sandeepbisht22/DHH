import mongoose from "mongoose";

const promoterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sociallinks: {
    type: Array,
    required: true,
  },
  originalName: {
    type: String,
  },
  profileImage: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const promoterModel = mongoose.model("promoter", promoterSchema);

export { promoterModel };
