const express = require("express")
const CapivaraHandler = require("./handlers/CapivaraHandler")

const routes = express.Router()

routes.get("/capivara", CapivaraHandler.index)
routes.get("/capivara/:id", CapivaraHandler.show)
routes.post("/capivara", CapivaraHandler.create)
routes.put("/capivara/:id", CapivaraHandler.update)
routes.delete("/capivara/:id", CapivaraHandler.delete)

module.exports = routes
