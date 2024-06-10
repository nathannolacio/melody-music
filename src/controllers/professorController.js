var professorModel = require("../models/professorModel")

function listar(req, res) {
    var idCurso = req.params.idCurso

    professorModel.listar(idCurso).then((resultado) => {
        res.status(200).json(resultado)
    })
}

module.exports = {
    listar
}