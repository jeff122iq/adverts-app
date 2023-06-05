const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      unique: true,
   },
   email: {
      type: String,
      unique: true,
   },
   password: String,
   isBanned: { type: Boolean, default: false },
   status: { type: Number, default: 0 }
});

userSchema.virtual("adverts", {
   ref: "Advert",
   localField: "_id",
   foreignField: "userId",
});

module.exports = userSchema;