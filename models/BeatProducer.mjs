import mongoose from "mongoose";

const beatProducerSchema = mongoose.Schema({
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

const beatProducerModel = mongoose.model("beatProducer", beatProducerSchema);

export { beatProducerModel };
