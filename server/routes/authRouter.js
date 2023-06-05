const express = require("express");
const authRouter  = express.Router();
const { authController } = require("../controller/authController");
const { check } = require("express-validator");

authRouter.post("/sign-up", [check("email").isEmail().withMessage("Invalid email"),], authController.signUp);
authRouter.post("/sign-in", [check("email").isEmail().withMessage("Invalid email"),], authController.signIn);

module.exports = authRouter;