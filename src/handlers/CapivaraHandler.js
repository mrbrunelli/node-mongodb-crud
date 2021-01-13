const Capivara = require("../models/Capivara")

class CapivaraHandler {
    async index(req, res) {
        Capivara.find({})
            .then(capivara => {
                return res.json(capivara)
            })
            .catch(err => {
                return res.status(400).json({
                    error: true,
                    message: "Nenhuma capivara encontrada!"
                })
            })
    }

    async show(req, res) {
        Capivara.findOne({_id: req.params.id})
            .then(capivara => {
                return res.json(capivara)
            })
            .catch(err => {
                return res.status(400).json({
                    error: true,
                    message: "Capivara não encontrada"
                })
            })
    }

    async create(req, res) {
        const capivara = Capivara.create(req.body, (err) => {
            if (err) {
                return res.status(400).json({
                    error: true,
                    message: "Erro ao cadastrar Capivara!"
                })
            }
            return res.json({
                error: false,
                message: "Capivara cadastrada com sucesso!"
            })
        })
    }

    async update(req, res) {
        const capivara = Capivara.updateOne({_id: req.params.id}, req.body, (err) => {
            if (err) {
                return res.status(400).json({
                    error: true,
                    message: "Erro ao editar Capivara!"
                })
            }
            return res.json({
                error: false,
                message: "Capivara editada com sucesso!"
            })
        })
    }

    async delete(req, res) {
        const capivara = Capivara.deleteOne({_id: req.params.id}, (err) => {
            if (err) {
                return res.status(400).json({
                    error: true,
                    message: "Erro ao deletar capivara!"
                })
            }
            return res.json({
                error: false,
                message: "Capivara deletada com sucesso!"
            })
        })
    }
}

module.exports = new CapivaraHandler