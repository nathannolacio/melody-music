var database = require("../database/config");

function listar() {
    var instrucaoSql = 'select * from curso'

    return database.executar(instrucaoSql)
}

module.exports = {
    listar
}