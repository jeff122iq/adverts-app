const mongoose = require("mongoose");
const categoriesSchema = require("./schema");

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;