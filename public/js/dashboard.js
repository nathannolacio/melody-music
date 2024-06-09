window.onload = exibirRanking(), buscarAcertosErros()

var idUsuario = sessionStorage.ID_USUARIO
const graficoPizza = document.getElementById('pizza')
const rankingConteudo = document.querySelector('.ranking-conteudo')

let dados = [];

function exibirRanking() {
    fetch("/dashboard/exibirRanking", {
        method: 'GET'
    }).then(function (resposta) {
        resposta.json().then((pessoas) => {
            pessoas.forEach((pessoa) => {
                rankingConteudo.innerHTML += `
                    <div class="linha">
                        <div class="coluna nome">${pessoa.nome}</div>
                        <div class="coluna qtdJogadas">${pessoa.qtdGeralJogadas}</div>
                        <div class="coluna pontuacaoGeral">${pessoa.totalPontuacaoGeral}</div>
                    </div>
                `
            })
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })    
}

function buscarAcertosErros() {
    fetch(`/dashboard/buscarAcertosErros/${sessionStorage.ID_USUARIO}`, {
        method: 'GET'
    }).then(function (resposta) {
        resposta.json().then((resultado) => {
            dados = resultado
            console.log(resultado)
            new Chart(graficoPizza, {
                type: 'pie',
                data: {
                labels: ['Acertos', 'Erros'],
                datasets: [{
                  label: '# of Votes',
                  data: [
                      dados.map(linha => linha.acertos),
                      dados.map(linha => linha.erros)
                  ],
                  borderWidth: 1
                }]
                }
                });
        })
        console.log(resposta)
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })
}