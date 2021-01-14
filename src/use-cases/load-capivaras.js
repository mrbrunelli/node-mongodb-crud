const {badRequest, ok} = require("../helpers/http-helper")

const Capivara = require("../models/capivara")

class LoadCapivaras {
    async load(req, res) {
        try {
            const capivaras = await Capivara.find()
            return ok(res, capivaras)
        } catch (e) {
            return badRequest(res, e)
        }
    }
}

module.exports = new LoadCapivaras