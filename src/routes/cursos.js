var express = require("express");
var router = express.Router();

var cursoController = require("../controllers/cursoController")

router.post("/cadastrar", function(req, res) {
    cursoController.cadastrar(req, res)
})

router.get("/listar", function (req, res) {
    cursoController.listar(req, res)
})

module.exports = router