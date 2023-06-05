const User = require("../models/User");

const checkEmail = async (email) => {
    const isEmail = await User.findOne({ email });
    if (!isEmail) {
        throw new Error("Email is not found");
    }
};

module.exports = { checkEmail };