const express = require('express');
const router = express.Router();
const userCtrl = require("../controllers/userController");
const { verifyToken } = require('../middleware/auth');

router.get('/allUsers', verifyToken ,userCtrl.getAllUsers);
router.delete('/deleteUser/:id', userCtrl.getAllUsers);


module.exports = router;