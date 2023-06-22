async function getAPIUsuarios(uri) {
    const encodedURI = encodeURI(uri);
    const response = await fetch(encodedURI);
    return await response.json();
}

async function montarTabelaUsuarios(pagina = 1) {
    const response = await getAPIUsuarios(`http://localhost:3000/perfil`);

    const usuarioList = response.map(u => ({
        nomeCompleto: u.nome,
        matricula: u.matricula,
        idade: u.idade,
        data_nascimento: u.data_nascimento,
        cpf: u.cpf,
        cidade: u?.localizacao?.cidade,
        estado: u?.localizacao?.estado
    }));
    const usuariosContainer = document.getElementById('usuarios-container');
    usuariosContainer.innerHTML = ""
    usuarioList.forEach((u, posicao) => {
        adicionarUsuarioLinha(usuariosContainer, u, posicao, pagina)
    });

}

function adicionarUsuarioLinha(usuariosContainer, usuario, contarPosicao, numeroPagina) {
    const contagem = 1 + (numeroPagina - 1) * 15 + contarPosicao;

    const usuarioDiv = document.createElement('div');
    usuarioDiv.className = 'usuario';
    
    const nomeCP = document.createElement('p');
    nomeCP.innerHTML = `<strong>Nome:</strong> <span>${usuario.nomeCompleto}</span>`;
    nomeCP.className = 'name'
    usuarioDiv.appendChild(nomeCP);

    const cpfP = document.createElement('p');
    cpfP.innerHTML = `<strong>CPF:</strong> <span>${usuario.cpf}</span>`;
    cpfP.className = 'cpf'
    usuarioDiv.appendChild(cpfP);

    const idadeP = document.createElement('p');
    idadeP.innerHTML = `<strong>Idade:</strong> <span>${usuario.idade}</span>`;
    idadeP.className = 'idade'
    usuarioDiv.appendChild(idadeP);

    const dataNascimentoP = document.createElement('p');
    dataNascimentoP.innerHTML = `<strong>Data de Nascimento:</strong> <span>${usuario.data_nascimento}</span>`;
    idadeP.className = 'nascimento'
    usuarioDiv.appendChild(dataNascimentoP);

    const estadoP = document.createElement('p');
    estadoP.innerHTML = `<strong>Estado:</strong> <span>${usuario.cidade}/${usuario.estado}</span>`;
    estadoP.className = 'estado'
    usuarioDiv.appendChild(estadoP);

    const contagemP = document.createElement('p');
    contagemP.innerHTML = `<strong>Posição:</strong> <span>${contagem}</span>`;
    contagemP.className = 'contagem';
    usuarioDiv.appendChild(contagemP)

    usuariosContainer.appendChild(usuarioDiv);
}
