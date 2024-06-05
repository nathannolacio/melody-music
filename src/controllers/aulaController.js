var aulaModel = require("../models/aulaModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuario;
    var idProfessor = req.body.idProfessor;
    var data = req.body.data;
    var horario = req.body.horario;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (data == undefined) {
        res.status(400).send("A data está undefined!");
    } else if (horario == undefined) {
        res.status(400).send("O horário está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        aulaModel.cadastrar(idUsuario, idProfessor, data, horario)
            .then(function(resposta){
                res.status(200).send("Aula agendada com sucesso")
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
                        "\nHouve um erro ao realizar o agendamento! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// function listarProximasAulas(req, res) {
//     var idUsuario = req.body.idUsuario

//     if(idUsuario == undefined) {
//         res.status(400).send("O id do usuário está undefined!");
//     } else {
//         aulaModel.listarProximasAulas(idUsuario)
//         .then(function (resposta) {
//             res.status(200).send("Aula listada com sucesso")
//         }).catch(function (erro) {
//             res.status(500).json(erro.sqlMessage)
//         }).then(function (resultado) {
//             res.json(resultado);
//         }).catch(function (erro) {
//             console.log(erro);
//             console.log(
//                 "\nHouve um erro ao listar! Erro: ",
//                 erro.sqlMessage
//             );
//             res.status(500).json(erro.sqlMessage);
//         })
//     }
// }

module.exports = {
    cadastrar,
    // listarProximasAulas
}