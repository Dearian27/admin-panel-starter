

export const createUser = (req, res) => {

}

export const getUsers = (req, res) => {
  return res.status(200).json({ message: "get users"});
}

export const deleteUser = (req, res) => {
  if(!req.isAdmin) {
    return res.status(418).json({ message: "cannot delete user"});
  }
}