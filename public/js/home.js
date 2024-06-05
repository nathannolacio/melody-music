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
    div_data_aula.style.display = 'block'
    div_horario_aula.style.display = 'block'
    div_professor_aula.style.display = 'none'
    btn_agendar.style.display = 'none'
    btn_prox_etapa.style.display = 'block'
    modal_agendar_aula.style.display = 'none'
}

function proximaEtapaAgendamento() {
    div_data_aula.style.display = 'none'
    div_horario_aula.style.display = 'none'
    div_professor_aula.style.display = 'block'
    btn_prox_etapa.style.display = 'none'
    btn_agendar.style.display = 'block'

    listarProfessores()
}

function agendarAula() {
    alert('aula agendada')
}

function listarProfessores() {
    fetch("/professores/listar", {
        method: 'GET'
    })
    .then(function (resposta) {
        resposta.json().then((professores) => {
            professores.forEach((professor) => {
                ipt_professor.innerHTML += `
                <option value='${professor.idProfessor}'>${professor.nome}</option>
                `
            })
        })
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })
}