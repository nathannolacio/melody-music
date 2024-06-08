var express = require("express");
var router = express.Router();

var jogadaController = require("../controllers/jogadaController");

router.post("/cadastrar", function (req, res) {
    jogadaController.cadastrar(req, res);
})

module.exports = router;