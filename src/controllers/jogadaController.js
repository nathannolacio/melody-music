var jogadaModel = require("../models/jogadaModel");

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var idQuiz = req.body.idQuiz;
    var qtdAcertos = req.body.qtdAcertos;

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else if (idQuiz == undefined) {
        res.status(400).send("O idQuiz está undefined!");
    } else if (qtdAcertos == undefined) {
        res.status(400).send("A qtdAcertos está undefined!");
    } else {

        jogadaModel.cadastrar(idUsuario, idQuiz, qtdAcertos)
            .then(function(resposta){
                res.status(200).send("Cadastro realizado com sucesso")
            }).catch(function(erro){
                res.status(500).json(erro.sqlMessage)
            })

            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}