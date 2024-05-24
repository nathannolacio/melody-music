function cadastrarUsuario() {
    const nome = ipt_nome.value
    const email = ipt_email.value
    const senha = ipt_senha.value
    // const confirmacaoSenha = ipt_confirmacaoSenha.value

    if (nome == '' || email == '' || senha == '') {
        mensagem_erro.innerHTML = 'Mensagem de erro para campos em branco'
    }

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