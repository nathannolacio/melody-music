const questao = document.querySelector(".questao");
const respostas = document.querySelector(".spnRespostas");
const qtdQuestoes = document.querySelector(".qtdQuestoes");
const textoEncerramento = document.querySelector(".txt_encerramento");
const conteudo = document.querySelector(".conteudo");
const conteudoEncerramento = document.querySelector(".encerramento");
const btnReiniciar = document.querySelector(".btn_reiniciar");

import { quizTeoriaMusical, quizViolao } from "./quizQuestoes/questoes.js"

let questaoAtual = 0
let qtdAcertos = 0
let quizSelecionado = quizViolao

btnReiniciar.onclick = () => {
    conteudo.style.display = "flex";
    conteudoEncerramento.style.display = "none";
  
    questaoAtual = 0;
    qtdAcertos = 0;
    exibirQuestao();
  };
  
  function proximaQuestao(e) {
    if (e.target.getAttribute("res-correta") === "true") {
      qtdAcertos++;
    }
  
    if (questaoAtual < quizSelecionado.length - 1) {
      questaoAtual++;
      exibirQuestao();
    } else {
      encerrar();
    }
  }
  
  function encerrar() {
    textoEncerramento.innerHTML = `Você acertou ${qtdAcertos} de ${quizSelecionado.length}`;
    conteudo.style.display = "none";
    conteudoEncerramento.style.display = "flex";
  }
  
  function exibirQuestao() {
    qtdQuestoes.innerHTML = `${questaoAtual + 1}/${quizSelecionado.length}`;
    const item = quizSelecionado[questaoAtual];
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
  
  exibirQuestao();  