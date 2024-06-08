var database = require("../database/config")

function cadastrar(idUsuario, idQuiz, qtdAcertos) {
    var instrucaoSql = `
        insert into jogada(fkUsuario, fkQuiz, pontuacao) values
        (${idUsuario}, ${idQuiz}, ${qtdAcertos});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}