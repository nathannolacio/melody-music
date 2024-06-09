var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.get("/exibirRanking", function (req, res) {
    dashboardController.exibirRanking(req, res)
})

router.get("/buscarAcertosErros/:idUsuario", function (req, res) {
    dashboardController.buscarAcertosErros(req, res)
})

module.exports = router