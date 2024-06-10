var database = require("../database/config")

function cadastrar(idUsuario, idProfessor, data, horario) {
    var instrucaoSql = `
    insert into aula(fkAluno, fkProfessor, dataHora) values
    (${idUsuario}, ${idProfessor}, '${data} ${horario}');
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idUsuario) {
    var instrucaoSql = `
    select aula.dataHora, usuario.id, usuario.nome, professor.nome, professor.email from aula
    join usuario on fkAluno = id
    join professor on fkProfessor = idProfessor
    where dataHora > current_timestamp() and id = ${idUsuario}
    order by dataHora asc;
    `
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar
}