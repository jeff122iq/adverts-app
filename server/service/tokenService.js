require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.tokenService = {
    async generateToken (payload) {
        const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "4h" });
        console.log(token)
        return token;
    },

    async decodeData (token) {
        const decodedData = await jwt.decode(token);
        return decodedData;
    }
}