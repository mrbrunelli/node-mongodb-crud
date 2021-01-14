const express = require("express")
const {
    loadCapivaras,
    loadCapivaraById,
    deleteCapivara,
    addCapivara,
    updateCapivara
} = require("../use-cases")

const router = express.Router()

router.get("/", loadCapivaras.load)
router.get("/:id", loadCapivaraById.load)
router.post("/", addCapivara.add)
router.put("/:id", updateCapivara.update)
router.delete("/:id", deleteCapivara.delete)

module.exports = router