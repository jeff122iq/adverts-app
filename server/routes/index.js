const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const advertsRouter = require("./advertsRouter");

router.get("/", (req, res) => res.send("Welcome to api!"));
router.use('/user', authRouter);
router.use('/advert', advertsRouter);

module.exports = router;