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
                } else {
                    sessionStorage.ID_CURSO = json[0].fkCurso
                }
            })
        }
    })
    .catch(function (erro) {
        console.log(erro)
    })

    listar(idUsuario)

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

    ipt_professor.innerHTML = `
    <option value=''>Selecione um(a) professor(a)</option>
    `

    ipt_data.value = ''
    ipt_horario.value = ''

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

function listarProfessores() {
    fetch(`/professores/listar/${sessionStorage.ID_CURSO}`, {
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

function formatarData(dataAula) {
    const data = new Date(dataAula)
    const dataFormatada = (data.getFullYear() + '-' + ((data.getMonth() + 1)) + '-' + (data.getDate() + 1))

    return dataFormatada
}

function agendarAula() {
    const dataAula = ipt_data.value
    const horarioAula = ipt_horario.value
    const idUsuario = sessionStorage.ID_USUARIO
    const idProfessor = ipt_professor.value
    const dataFormatada = formatarData(dataAula)

    fetch("/aulas/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: idUsuario,
            idProfessor: idProfessor,
            data: dataFormatada,
            horario: horarioAula
        })
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta)

        if(resposta.ok) {
            fecharModalAgendarAula()
            verificarUsuario()
        } else {
            throw "Houve um erro ao tentar agendar a aula!"
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })

    return false
}

function listar(idUsuario) {
    fetch("/aulas/listar", {
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
            console.log("resposta: ", resposta)

            resposta.json().then(json => {
                console.log(JSON.stringify(json))

                var data = new Date(json.dataHora).toLocaleDateString('pt-br')
                data_aula_marcada.innerHTML = data
                spn_horario_aula.innerHTML = new Date(json.dataHora).getHours() + 'h'
                spn_professor_aula.innerHTML = json.nomeProfessor
                spn_email_professor.innerHTML = json.emailProfessor
            })
            
        } else {
            console.log("Houve um erro ao tentar listar a aula!");
            
            resposta.text().then(texto => {
                console.error(texto);
            });

            texto_aula.innerHTML = `
                <p>Você não tem nenhuma aula marcada!</p>
            `
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })

    return false
}