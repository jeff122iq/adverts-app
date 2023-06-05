const Advert = require('../models/Advert');

exports.advertService = {
    async getAllAdverts() {
        const data = await Advert.find();
        return data;
    },

    async getAdvertsById(id) {
        const data = await Advert.findOne({_id: id});
        return data;
    },

    async createAdvert(advert) {
        const data = await Advert.create(advert);
        return data;
    },

    async editAdvert(id, advert) {
        const data = await Advert.findOneAndUpdate({_id: id}, advert, { new: true })
        return data;
    },

    async deleteAdvert(id) {
        const data = await Advert.de
    },
}