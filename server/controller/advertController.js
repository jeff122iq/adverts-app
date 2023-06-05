const {advertService} = require("../service/advertService")

exports.advertController = {
    async getAllAdverts (req, res) {
      try {
          console.log(123)
        const data = await advertService.getAllAdverts();
        res.status(200).json(data);
      } catch (e) {
          res.status(400).json(e.message);
      }
    },

    async getAdvertById (req, res) {
        try {
            const data = await advertService.getAdvertsById(req.params.id);
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    async getUserAdverts (req, res) {
      try {
          const data = await advertService.getUserAdverts()
          res.status(200).json(data)
      } catch (e) {
          res.status(400).json(e.message);
      }
    },

    async createAdvert(req, res) {
        try {
            const {title, description, image, date, city} = req.body;
            const data = await advertService.createAdvert({title, description, image, date, city});
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    async editAdvert(req, res) {
        try {
            const { id } = req.params;
            const {} = req.body;
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    async deleteAdvert(req, res) {
        try {
            const { id } = req.params;
            const {} = req.body;
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
}