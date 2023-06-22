const assert = require('assert');
// const fetch = require('node-fetch');

async function getAPIUsuarios(uri) {
  const encodedURI = encodeURI(uri);
  const response = await fetch(encodedURI);
  return response.json();
}

describe('Testes da API de Usuários', function () {
  let usuarios;

  before(async function () {
    usuarios = await getAPIUsuarios('http://localhost:3000/perfil');
  });

  it('Deve retornar um array de usuários', function () {
    assert(Array.isArray(usuarios));
    assert(usuarios.length > 0);
  });

  it('Cada usuário deve conter nome, matrícula, idade, data de nascimento, CPF, foto, cidade e estado', function () {
    const usuario = usuarios[0];
    assert(usuario.nome);
    assert(usuario.matricula);
    assert(usuario.idade);
    assert(usuario.data_nascimento);
    assert(usuario.cpf);
    assert(usuario.foto);
    assert(usuario.localizacao);
    assert(usuario.localizacao.cidade);
    assert(usuario.localizacao.estado);
  });

  it('A quantidade de usuários deve ser igual a 8', function () {
    assert.strictEqual(usuarios.length, 8);
  });

  it('O CPF de cada usuário deve ter 11 dígitos', function () {
    usuarios.forEach(function (usuario) {
      assert.strictEqual(usuario.cpf.length, 11);
    });
  });


  it('A idade de cada usuário deve ser um número maior que 0', function () {
    usuarios.forEach(function (usuario) {
      assert.strictEqual(typeof usuario.idade, 'number');
      assert(usuario.idade > 0);
    });
  });
});



//  Por favor, me salva. Minha dupla é meio doida da cabeça "Wesley", ele precisa de ajuda médica urgente... faz alguns dias que estamos quase terminando o trabalho
//  E ele vem com história de que vai querer colocar alguma coisa nova, tipo ???? que aluno é esse cara, o cara tá parecendo o Gluber mano. WTF!!!!!.
//  No mínimo uma dose seria de terapia, é necessária. ME AJUDA DAVID!!!!!


// É mentira dele! by: Wesley