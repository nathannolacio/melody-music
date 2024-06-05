var professorModel = require("../models/professorModel")

function listar(req, res) {
    professorModel.listar().then((resultado) => {
        res.status(200).json(resultado)
    })
}

module.exports = {
    listar
}