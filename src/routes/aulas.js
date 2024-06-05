var express = require("express");
var router = express.Router();

var aulaController = require("../controllers/aulaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    aulaController.cadastrar(req, res);
})

// router.post("/listarProximasAulas", function (req, res) {
//     aulaController.listarProximasAulas(req, res);
// })

module.exports = router;