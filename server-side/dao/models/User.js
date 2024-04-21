import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: String,
}, {
  timestamps: true, strict: false
})

const User = mongoose.model('User', userSchema)

export default User
