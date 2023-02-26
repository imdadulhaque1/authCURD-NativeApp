const express = require("express");
const {
  loginController,
  registerController,
  getAllUser,
} = require("../controllers/usersController");

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/", getAllUser);

module.exports = router;
