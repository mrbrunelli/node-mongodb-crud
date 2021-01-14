const {badRequest, ok} = require("../helpers/http-helper")

const Capivara = require("../models/capivara")

class UpdateCapivara {
    async update(req, res) {
        try {
            const capivara = await Capivara.updateOne({_id: req.params.id}, req.body)
            return ok(res, capivara)
        } catch (e) {
            return badRequest(res, e)
        }
    }
}

module.exports = new UpdateCapivara