function fazerLogin() {
    const email = ipt_email.value
    const senha = ipt_senha.value

    if (!email || !senha) {
        abrirModalErro()
        mensagem_erro.innerHTML = 'Os campos não podem estar em branco!'
    } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        abrirModalErro()
        mensagem_erro.innerHTML = 'Seu email precisa ter um "@" e um "."!'
    } 
    
    else {

        console.log("FORM LOGIN: ", email);
        console.log("FORM SENHA: ", senha);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_USUARIO = json.id;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.EMAIL_USUARIO = json.email;

                    modal_mensagem.style.display = 'flex'
                    mensagem_erro_container.style.display = 'none'
                    mensagem_sucesso_container.style.display = 'flex'
                    mensagem_sucesso.innerHTML = 'Redirecionando para o nosso site.'
                    setTimeout(function () {
                        window.location = "./home.html"
                    }, 2000)

                });
            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });

                modal_mensagem.style.display = 'flex'
                mensagem_sucesso_container.style.display = 'none'
                mensagem_erro.innerHTML = 'Houve um erro ao tentar realizar o login. Tente novamente!'
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false
    }
}

function fecharModal() {
    modal_mensagem.style.display = 'none'
}

function abrirModalErro() {
    modal_mensagem.style.display = 'flex'
    mensagem_erro_container.style.display = 'flex'
    mensagem_sucesso_container.style.display = 'none'
}

function abrirModalSucesso() {
    modal_mensagem.style.display = 'flex'
    mensagem_erro_container.style.display = 'none'
    mensagem_sucesso_container.style.display = 'flex'
}