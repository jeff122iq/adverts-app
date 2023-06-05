const { authService } = require("../service/authService")

exports.authController = {
    async signUp(req, res) {
        try {
            const { username, email, password } = req.body;
            const data = await authService.signUp({ username, email, password });
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e.message)
        }
    },

    async signIn(req, res) {
        try {
            const { email, password } = req.body;
            const data = await authService.signIn({email, password});
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }
}