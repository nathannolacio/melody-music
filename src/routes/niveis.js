var express = require("express");
var router = express.Router();

var nivelController = require("../controllers/nivelController")

router.post("/cadastrar", function(req, res) {
    nivelController.cadastrar(req, res)
})

router.get("/listar", function (req, res) {
    nivelController.listar(req, res)
})

module.exports = router