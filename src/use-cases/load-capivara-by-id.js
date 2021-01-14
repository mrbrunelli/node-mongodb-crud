const {badRequest, ok} = require("../helpers/http-helper")

const Capivara = require("../models/capivara")

class LoadCapivaraById {
    async load(req, res) {
        try {
            const capivara = await Capivara.findOne({_id: req.params.id})
            return ok(res, capivara)
        } catch (e) {
            return badRequest(res, e)
        }
    }
}

module.exports = new LoadCapivaraById