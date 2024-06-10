var database = require("../database/config");

function exibirRanking() {
    var instrucaoSql = `
    select usuario.nome, count(jogada.idJogada) as qtdGeralJogadas, sum(jogada.pontuacao) as totalPontuacaoGeral from usuario
    join jogada on fkUsuario = id
    group by usuario.nome
    order by totalPontuacaoGeral desc;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function buscarAcertosErros(idUsuario) {
    var instrucaoSql = `
    select sum(acertos) as acertos, sum(erros) as erros from usuario
    join jogada on id = fkUsuario
    where id = ${idUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    exibirRanking,
    buscarAcertosErros
}