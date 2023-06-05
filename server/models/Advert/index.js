const mongoose = require("mongoose");
const advertSchema = require("./schema");

const Advert = mongoose.model('Advert', advertSchema);

module.exports = Advert;