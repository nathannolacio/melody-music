var nivelModel = require("../models/nivelModel")

function listar(req, res) {
    nivelModel.listar().then((resultado) => {
        res.status(200).json(resultado)
    })
}

module.exports = {
    listar
}