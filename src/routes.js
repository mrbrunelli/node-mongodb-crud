const express = require("express")
const CapivaraHandler = require("./handlers/capivara-handler")

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        capivaraSays: "Welcome nhm nhm nhm... Stranger!",
        apiDoc: "https://github.com/mrbrunelli/node-mongodb-crud/blob/master/README.md"
    })
})
router.use("/capivara", CapivaraHandler)

module.exports = router
