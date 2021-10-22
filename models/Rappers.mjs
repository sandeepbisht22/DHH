import mongoose from "mongoose";

const rapperSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  socialLinks: {
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
});

const rapperModel = mongoose.model("rapper", rapperSchema);

export { rapperModel };
