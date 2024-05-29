var database = require("../database/config");

function listar() {
    var instrucaoSql = 'select * from curso'

    return database.executar(instrucaoSql)
}

function buscarPorEmail() {
    
}

module.exports = {
    listar
}