function cadastrarUsuario() {
    const nome = ipt_nome.value
    const email = ipt_email.value
    const senha = ipt_senha.value
    const confirmacaoSenha = ipt_confirmacaoSenha.value
    const curso = ipt_curso.value
    const nivel = ipt_nivel.value

    if (nome == '' || email == '' || senha == '') {
        mensagem_erro.innerHTML = 'Todos os campos devem ser preenchidos!'
    } else if (senha != confirmacaoSenha) {
        mensagem_erro.innerHTML = 'As senhas informadas não são iguais!'
    } else

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
}

function irParaPaginaInicial() {
    window.location = 'index.html'
}

function irParaCadastroParte2() {
    cadastro_pt1.style.display = 'none'
    cadastro_pt2.style.display = 'flex'
}

function irParaPaginaCadastro() {
    cadastro_pt2.style.display = 'none'
    cadastro_pt1.style.display = 'flex'
}