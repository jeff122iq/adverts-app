require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.tokenMiddleware = {
    checkToken(req, res, next) {
        const accessToken = req.headers.authorization;

        if (accessToken) {
            const token = accessToken.split(" ")[1];

            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

                if (err) {
                    return res.status(403).json('Forbidden');
                }
                
                req.user = user;
                next();
            });
        } else {
            res.status(401).json('Unauthorized');
        }
    }
}