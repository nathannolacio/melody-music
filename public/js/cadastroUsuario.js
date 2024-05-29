function cadastrarUsuario() {
    const nome = ipt_nome.value
    const email = ipt_email.value
    const senha = ipt_senha.value

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha
        }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          

        //   mensagem_sucesso.innerHTML =
        //     "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        //   setTimeout(() => {
        //     window.location = "login.html";
        //   }, "2000");

          limparFormulario();
        //   finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });

    return false;
}


function irParaPaginaInicial() {
    window.location = 'index.html'
}

function irParaPaginaCadastro() {
    cadastro_pt2.style.display = 'none'
    cadastro_pt1.style.display = 'flex'
}

function fecharModal() {
    modal_mensagem.style.display = 'none'
}

function listarCursos() {
    fetch("/cursos/listar", {
        method: "GET",
    })
    .then (function (resposta) {
        resposta.json().then((cursos) => {
            cursos.forEach((curso) => {
                ipt_curso.innerHTML += `
                <option value='${curso.idCurso}'>${curso.nome}</option>
                `
            });
        })
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })
}

function listarNiveis() {
    fetch("/niveis/listar", {
        method: "GET",
    })
    .then (function (resposta) {
        resposta.json().then((niveis) => {
            niveis.forEach((nivel) => {
                ipt_nivel.innerHTML += `
                <option value='${nivel.idNivel}'>${nivel.nome}</option>
                `
            })
        })
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })
}

function buscarUsuario() {
    const email = ipt_email.value

    console.log(email)

    fetch("/usuarios/buscarPorEmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta)
            console.log('estou aqui')
            resposta.json().then(json => {
                console.log(json)
                let idUsuario = json.id
                
                console.log(idUsuario)
            })
        } else {
            resposta.text().then(texto => {
                console.error(texto)
            })
        }
    })
    .catch(function (erro) {
        console.log(erro)
    })
    
    return false
}