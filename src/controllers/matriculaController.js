var matriculaModel = require("../models/matriculaModel")

function listarPorIdUsuario(req, res) {
    let id = req.body.idUsuario

    matriculaModel.listarPorIdUsuario(id)
    .then((resultado) => {
        console.log(`\nResultados encontrados: ${resultado.length}`)
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        res.status(200).json(resultado)
    })
    .catch(function (erro) {
        console.log(erro)
        res.status(500).json(erro.sqlMessage)
    })
}

function cadastrar(req, res) {
    let idUsuario = req.body.idUsuarioServer
    let idCurso = req.body.idCursoServer
    let idNivel = req.body.idNivelServer

    matriculaModel.cadastrar(idUsuario, idCurso, idNivel)
    .then((resultado) => {
        console.log(`\nResultados encontrados: ${resultado.length}`)
        console.log(`Resultados: ${JSON.stringify(resultado)}`)

        res.status(200).json(resultado)
    })
    .catch(function (erro) {
        console.log(erro)
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports = { 
    listarPorIdUsuario,
    cadastrar
}