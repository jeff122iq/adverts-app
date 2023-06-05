const {User} = require("../models/User");
const bcrypt = require("bcrypt");

exports.authMiddleware = {
    async loginMiddleware(req, res, next) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        if ( await User.findOne(email)) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        try {
            const isPasswordValid = await bcrypt.compare(password, hashedPassword);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid email or password.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error.' });
        }
        next();
    }
}