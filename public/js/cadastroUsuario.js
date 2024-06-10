function cadastrarUsuario() {
    const nome = ipt_nome.value
    const email = ipt_email.value
    const senha = ipt_senha.value
    const senhaConfirm = ipt_confirmacaoSenha.value

    let senhaTemNumero = false
    for (let posicao = 0; posicao < senha.length; posicao++) {
        if(senha.indexOf(posicao) != -1) {
            senhaTemNumero = true
        }
    }

    if (!nome || !email || !senha || !senhaConfirm) {
        abrirModalErro()
        mensagem_erro.innerHTML = 'É necessário preencher todos os campos para continuar!'
    } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        abrirModalErro()
        mensagem_erro.innerHTML = 'Seu email precisa ter um "@" e um "."!'
    } else if (senha != senhaConfirm) {
        abrirModalErro()
        mensagem_erro.innerHTML = 'As senhas não são iguais!'
    } else if(!senhaTemNumero) {
        abrirModalErro()
        mensagem_erro.innerHTML = 'A senha precisa ter pelo menos 1 caracter numérico!'
    } else if(senha.length < 6) {
        abrirModalErro()
        mensagem_erro.innerHTML = 'A senha precisa ter pelo menos 6 caracteres!'
    } else if(senha.length > 16) {
        abrirModalErro()
        mensagem_erro.innerHTML = 'A senha deve conter no máximo 16 caracteres!'
    } else {

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
            abrirModalSucesso()
            mensagem_sucesso.innerHTML = 'Cadastro realizado com sucesso! Redirecionando para a página de login!'

            setTimeout(() => {
                window.location = "../login.html"
            }, "1000")

            } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }

}


function irParaPaginaInicial() {
    window.location = 'index.html'
}

function irParaPaginaCadastro() {
    cadastro_pt2.style.display = 'none'
    cadastro_pt1.style.display = 'flex'
}

function abrirModalSucesso() {
    modal_mensagem.style.display = 'flex'
    mensagem_erro_container.style.display = 'none'
    mensagem_sucesso_container.style.display = 'flex'
}

function abrirModalErro() {
    modal_mensagem.style.display = 'flex'
    mensagem_erro_container.style.display = 'flex'
    mensagem_sucesso_container.style.display = 'none'
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