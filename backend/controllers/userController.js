const Users = require("../models/userModel");

const userController = {
  //GET ALL USER
  getAllUsers: async (req, res) => {
    try {
      const user = await Users.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE A USER
  deleteUser: async (req, res) => {
    try {
      await Users.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
