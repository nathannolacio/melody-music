const questao = document.querySelector(".questao");
const respostas = document.querySelector(".spnRespostas");
const qtdQuestoes = document.querySelector(".qtdQuestoes");
const textoEncerramento = document.querySelector(".txt_encerramento");
const conteudo = document.querySelector(".conteudo");
const conteudoEncerramento = document.querySelector(".encerramento");
const btnReiniciar = document.querySelector(".btn_reiniciar");
const btnAnalisar = document.querySelector(".btn_analisar");

import { quizes } from "./quizQuestoes/questoes.js"

console.log(quizes)

let idUsuario = sessionStorage.ID_USUARIO
let idQuiz = sessionStorage.ID_QUIZ

let questaoAtual = 0
let qtdAcertos = 0
const quizSelecionado = quizes[idQuiz-1]

btnReiniciar.onclick = () => {
    conteudo.style.display = "flex";
    conteudoEncerramento.style.display = "none";
  
    questaoAtual = 0;
    qtdAcertos = 0;
    exibirQuestao();
  };

  btnAnalisar.onclick = () => {
    window.location = '../dashboard/index.html'
  }

  function proximaQuestao(e) {
    if (e.target.getAttribute("res-correta") === "true") {
      qtdAcertos++;
    }
  
    if (questaoAtual < quizSelecionado.conteudo.length - 1) {
      questaoAtual++;
      exibirQuestao();
    } else {
      encerrar();
    }
  }
  
  function encerrar() {
    textoEncerramento.innerHTML = `Você acertou ${qtdAcertos} de ${quizSelecionado.conteudo.length}`;
    conteudo.style.display = "none";
    conteudoEncerramento.style.display = "flex";

    cadastrarJogada()
  }
  
  function exibirQuestao() {
    qtdQuestoes.innerHTML = `${questaoAtual + 1}/${quizSelecionado.conteudo.length}`;
    const item = quizSelecionado.conteudo[questaoAtual];
    respostas.innerHTML = "";
    questao.innerHTML = item.questao;
  
    item.respostas.forEach((resposta) => {
      const div = document.createElement("div");
  
      div.innerHTML = `
      <button class="resposta" res-correta="${resposta.correta}">
        ${resposta.alternativa}
      </button>
      `;
  
      respostas.appendChild(div);
    });
  
    document.querySelectorAll(".resposta").forEach((item) => {
      item.addEventListener("click", proximaQuestao);
    });
  }

  function cadastrarJogada() {
    fetch("/jogadas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idUsuario: idUsuario,
        idQuiz: idQuiz,
        qtdAcertos: qtdAcertos
      })
    }).then(function (resposta) {
      console.log("resposta: ", resposta);

      if(resposta.ok) {
        console.log('Cadastro de jogada realizado com sucesso!')
      } else {
        throw "Houve um erro ao tentar realizar o cadastro da jogada!";
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    })

    return false
  }

  function navegarParaDashboard() {
    window.location = './dashboard/index.html'
  }

  exibirQuestao()