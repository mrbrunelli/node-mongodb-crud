const mongoose = require("../database/connection")

const Capivara = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    pelagem: {
        type: String,
        required: true
    },
    nativa: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('capivara', Capivara)