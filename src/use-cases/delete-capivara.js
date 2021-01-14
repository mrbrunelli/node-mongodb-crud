const {badRequest, ok} = require("../helpers/http-helper")

const Capivara = require("../models/capivara")

class DeleteCapivara {
    async delete(req, res) {
        try {
            const capivara = await Capivara.deleteOne({_id: req.params.id})
            return ok(res, capivara)
        } catch (e) {
            return badRequest(res, e)
        }
    }
}

module.exports = new DeleteCapivara