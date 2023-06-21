const assert = require('assert');
const fetch = require('node-fetch');

async function getAPIUsuarios(uri) {
  const encodedURI = encodeURI(uri);
  const response = await fetch(encodedURI);
  return await response.json();
}

describe('Testes da API de Usuários', function () {
  let usuarios;

  before(async function () {
    usuarios = await getAPIUsuarios('http://localhost:3000/perfil');
  });

  it('Deve retornar um array de usuários', function () {
    assert(Array.isArray(usuarios));
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

  it('A quantidade de usuários deve ser igual a 15', function () {
    assert.strictEqual(usuarios.length, 15);
  });

  it('A foto de cada usuário deve ser uma URL válida', function () {
    usuarios.forEach(function (usuario) {
      assert(usuario.foto.match(/^https?:\/\/.*$/));
    });
  });

  it('A idade de cada usuário deve ser um número maior que 0', function () {
    usuarios.forEach(function (usuario) {
      assert.strictEqual(typeof usuario.idade, 'number');
      assert(usuario.idade > 0);
    });
  });
});