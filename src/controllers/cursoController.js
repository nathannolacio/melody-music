var cursoModel = require("../models/cursoModel")

function listar(req, res) {
    cursoModel.listar().then((resultado) => {
        res.status(200).json(resultado)
    })
}

module.exports = {
    listar
}