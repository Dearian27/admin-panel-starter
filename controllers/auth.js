import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const signUp = async(req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password) {
    return res.status(403).json({ message: 'Please provide credentials'});
  }
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    if(!hashedPassword) {
      return res.status(500).json({ message: 'Щось пішло не так' });
    }
    const user = new User({name: name, email: email, password: hashedPassword});
    await user.save();
    return res.status(200).json({ user});
  } catch(err) {
    console.log(err)
    return res.status(500).json({ message: 'Помилка при створенні користувача'});
  }
}

export const signIn = (req, res) => {

}