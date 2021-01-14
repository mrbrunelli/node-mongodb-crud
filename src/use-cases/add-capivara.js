const {badRequest, ok} = require("../helpers/http-helper")

const Capivara = require("../models/capivara")

class AddCapivara {
    async add(req, res) {
        try {
            const capivara = await Capivara.create(req.body)
            return ok(res, capivara)
        } catch (e) {
            return badRequest(res, e)
        }
    }
}

module.exports = new AddCapivara