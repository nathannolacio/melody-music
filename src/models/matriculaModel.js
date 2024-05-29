var database = require("../database/config")

function listarPorIdUsuario(id) {
    var instrucaoSql = `select * from matricula where fkUsuario = ${id}`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function cadastrar(idUsuario, idCurso, idNivel) {
    var instrucaoSql = `
    insert into matricula(fkUsuario, fkCurso, fkNivel) values
    (${idUsuario}, ${idCurso}, ${idNivel});
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    listarPorIdUsuario,
    cadastrar
}