const mongoose = require("mongoose");

const advertsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: mongoose.Schema.Types.Mixed,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
});

module.exports = advertsSchema;