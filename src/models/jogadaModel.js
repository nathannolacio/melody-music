var database = require("../database/config")

function cadastrar(idUsuario, idQuiz, pontuacao, qtdAcertos, qtdErros) {
    var instrucaoSql = `
        insert into jogada(fkUsuario, fkQuiz, pontuacao, acertos, erros) values
        (${idUsuario}, ${idQuiz}, ${pontuacao}, ${qtdAcertos}, ${qtdErros});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}