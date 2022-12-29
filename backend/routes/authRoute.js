const express = require('express');
const router = express.Router();
const authCtrl = require("../controllers/authController");
const { verifyToken } = require('../middleware/auth');

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.post('/refresh', authCtrl.refreshToken);
router.post('/logout', verifyToken, authCtrl.logout);


module.exports = router;