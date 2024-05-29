var express = require("express");
var router = express.Router();

var matriculaController = require("../controllers/matriculaController")

router.post("/cadastrar", function (req, res) {
    matriculaController.cadastrar(req, res)
})

router.post("/listarPorIdUsuario", function (req, res) {
    matriculaController.listarPorIdUsuario(req, res)
})

module.exports = router