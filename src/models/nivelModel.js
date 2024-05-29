var database = require("../database/config");

function listar() {
    var instrucaoSql = 'select * from nivel'

    return database.executar(instrucaoSql)
}

module.exports = {
    listar
}