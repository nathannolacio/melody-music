var express = require("express");
var router = express.Router();

var professorController = require("../controllers/professorController")

router.get("/listar/:idCurso", function (req, res) {
    professorController.listar(req, res)
})

module.exports = router