module.exports = {
    ok(res, data) {
        return res.json(data)
    },

    noContent(res) {
        return res.status(204)
    },

    badRequest(res, err) {
        return res.status(400).json(err)
    },

    serverError(res, err) {
        return res.status(500).json(err)
    }
}
