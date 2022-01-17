import mongoose from "mongoose";

const rapperSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  about: {
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
  like: {
    type: Number,
    default: 0,
  },
  unLike: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const rapperModel = mongoose.model("rapper", rapperSchema);

export { rapperModel };
