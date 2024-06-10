var database = require("../database/config");

function listar(idCurso) {
    var instrucaoSql = `
    select idProfessor, nome from professor
    where fkCurso = ${idCurso};
    `

    return database.executar(instrucaoSql)
}

module.exports = {
    listar
}