window.onload = verificarUsuario()

function verificarUsuario() {
    const idUsuario = sessionStorage.ID_USUARIO
    console.log(idUsuario)

    fetch("/matriculas/listarPorIdUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: idUsuario
        })
    })
    .then(function (resposta) {
        if(resposta.ok) {
            console.log(resposta)

            resposta.json().then(json => {
                console.log('exibindo o resultado aqui em baixo:')
                console.log(json)
                console.log(JSON.stringify(json))

                if(json.length == 0) {
                    validarSessao()
                    modal_matricula.style.display = 'flex'
                }
            })
        }
    })
    .catch(function (erro) {
        console.log(erro)
    })

    return false
}

function abrirModalAgendarAula() {
    modal_agendar_aula.style.display = 'flex'
}

function fecharModalAgendarAula() {
    modal_agendar_aula.style.display = 'none'
}