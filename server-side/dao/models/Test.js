import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Test', TestSchema);
