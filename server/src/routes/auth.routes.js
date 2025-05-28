const express = require("express");
const { 
  registerUser, 
  loginUser, 
  googleAuth,
  verifyToken 
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google", googleAuth); // Google auth endpoint
router.get("/verify", verifyToken);

module.exports = router;