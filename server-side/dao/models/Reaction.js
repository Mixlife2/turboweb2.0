import mongoose from 'mongoose';

const ReactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  feedback: {
    type: String,
    required: true
  }
});

export default mongoose.model('Reaction', ReactionSchema);
