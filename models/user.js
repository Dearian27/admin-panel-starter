import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  //TODO:
  // name
  // email
  // hashedPassword
  // status
},
  {
    timestamps: true
  },
)
export default mongoose.model('User', UserSchema);