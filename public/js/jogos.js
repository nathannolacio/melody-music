const divQuiz = document.querySelectorAll('.card-conteudo');

let idQuiz = 0

for (let item = 0; item < divQuiz.length; item++) {
  divQuiz[item].addEventListener("click", function (evento) {
      idQuiz = this.getAttribute('idQuiz')
      sessionStorage.ID_QUIZ = idQuiz
      window.location = './jogos/quiz.html'
  })
}