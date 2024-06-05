var database = require("../database/config");

function listar() {
    var instrucaoSql = `
    select professor.nome from professor 
    join aula on idProfessor = fkProfessor 
    where dataHora != '2024-06-03 12:00:00';
    `

    return database.executar(instrucaoSql)
}

module.exports = {
    listar
}