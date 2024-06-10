window.onload = listarCursos(), listarNiveis()

function matricular() {
    const idCurso = ipt_curso.value
    const idNivel = ipt_nivel.value
    const idUsuario = sessionStorage.ID_USUARIO

    if (idCurso == '' || idNivel == '') {
        modal_mensagem.style.display = 'flex'
        mensagem_sucesso_container.style.display = 'none'
        mensagem_erro.innerHTML = 'Todos os campos devem ser preenchidos!'
    } else {
        fetch("/matriculas/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                idCursoServer: idCurso,
                idNivelServer: idNivel,
            }),
        })
        .then (function (resposta) {
            console.log("resposta: ", resposta);
            
            if(resposta.ok) {

            resposta.json().then(json => {
                console.log(json)
                console.log(JSON.stringify(json))

                sessionStorage.ID_CURSO = idCurso

                modal_mensagem.style.display = 'flex'
                mensagem_erro_container.style.display = 'none'
                mensagem_sucesso.innerHTML =
                "Cadastro realizado com sucesso!<br> Redirecionando para a nossa home..."

                setTimeout(() => {
                    window.location = './aula.html'
                }, '2000')
            })
            }
        })
        .catch(function (erro) {
            console.log(erro)
        })
    }

    return false
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