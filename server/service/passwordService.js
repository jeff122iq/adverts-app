const bcrypt = require("bcrypt");

exports.passwordService = {
    hashPassword(password) {
        const hashedPassword = bcrypt.hashSync(password, 12);
        return hashedPassword;
    },

    comparePassword(password, hashedPassword) {
        const compareStatus = bcrypt.compareSync(password, hashedPassword);
        return compareStatus;
    }
}