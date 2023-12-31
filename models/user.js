import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['viewer', 'admin'],
    default: 'viewer',
  }
},
  {
    timestamps: true
  },
)
export default mongoose.model('User', UserSchema);