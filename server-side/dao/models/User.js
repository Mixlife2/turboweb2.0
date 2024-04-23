import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  
  name: {
    type: String,
    
  },
  surname: {
    type: String,
    
  },
  specification: {
    type: String,
  
  },
  skills: {
    type: [String],
    
  },
  avatar: {
    type: String,
    
  },
  settings: {
    type: mongoose.Schema.Types.Mixed,
    
  },
  role: {
    type: String,
    enum: ['freelancer', 'business'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  subscription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subscription',
    
  },
  level: {
    type: Number,
    
  }
});

export default mongoose.model('User', UserSchema);
