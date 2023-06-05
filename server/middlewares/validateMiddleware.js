const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.validateMiddleware = {
    async checkEmail(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email } = req.body;

        try {
            const isEmail = await User.findOne({ email });
            if (!isEmail) {
                throw new Error("Email is not found");
            }

            next(); // Переход к следующему обработчику маршрута
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}