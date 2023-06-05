const User = require("../models/User/index");
const bcrypt = require("bcrypt");
const {tokenService} = require("./tokenService");
const {passwordService} = require("./passwordService");
const {checkEmail} = require("../helpers/loginHelpers");

exports.authService = {
    async signUp(data) {
        const user = User({...data, password: passwordService.hashPassword(data.password)});
        await user.save();
        const accessToken = await tokenService.generateToken({_id: user._id});
        return {accessToken};
    },

    async signIn(data) {
        await checkEmail(data.email);
        const user = await User.findOne({email: data.email});
        const accessToken = await tokenService.generateToken({_id: user._id});
        return {accessToken};
    }
}