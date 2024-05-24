function fazerLogin() {
    // aguardar()

    const email = ipt_email.value
    const senha = ipt_senha.value

    if (email == '' || senha == '') {
        mensagem_erro.innerHTML = 'Mensagem de erro para campos em branco'
        // finalizarAguardar()
        return false
    } 
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

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
            window.location = "../home.html"

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                // sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)

                setTimeout(function () {
                    window.location = "./home.html"
                }, 1000) // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

// function sumirMensagem() {
//     cardErro.style.display = "none"
// }