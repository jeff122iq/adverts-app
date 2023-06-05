const express = require("express");
const advertsRouter = express.Router();
const {advertController} = require("../controller/advertController");
const {tokenMiddleware} = require("../middlewares/tokenMiddleware")

advertsRouter.get("/getAllAdverts", advertController.getAllAdverts);
advertsRouter.get("/getAdvertById", advertController.getAdvertById);
advertsRouter.get("/getUserAdverts", tokenMiddleware.checkToken, advertController.getUserAdverts)
advertsRouter.post("/editAdvert", tokenMiddleware.checkToken, advertController.editAdvert);
advertsRouter.delete("/deleteAdvert", tokenMiddleware.checkToken, advertController.deleteAdvert);

module.exports = advertsRouter