var dashboardModel = require("../models/dashboardModel")

function exibirRanking(req, res) {
    dashboardModel.exibirRanking().then((resultado) => {
        res.status(200).json(resultado)
    })
}

function buscarAcertosErros(req, res) {
    var idUsuario = req.params.idUsuario

    dashboardModel.buscarAcertosErros(idUsuario).then((resultado) => {
        res.status(200).json(resultado)
    })
}

module.exports = {
    exibirRanking,
    buscarAcertosErros
}