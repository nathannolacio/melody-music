const conteudoContainer = document.querySelector('.conteudo-container')
const cardConteudo = document.querySelectorAll('.card-conteudo')
const tituloConteudo = document.querySelector('.titulo-conteudo')
const btnFecharModal = document.querySelector('.fa-xmark')

import { conteudos } from "../conteudos/conteudos.js"

let idConteudo = 0

for (let item = 0; item < cardConteudo.length; item++) {
    cardConteudo[item].addEventListener("click", function (evento) {
        idConteudo = this.getAttribute('idConteudo')
        abrirModalTema()
    })
}

function abrirModalTema() {
    modal_tema.style.display = 'flex'

    tituloConteudo.innerHTML = conteudos[idConteudo-1].titulo
    conteudoContainer.innerHTML = conteudos[idConteudo-1].conteudo
}

btnFecharModal.onclick = function fecharModalTema() {
    modal_tema.style.display = 'none'
}