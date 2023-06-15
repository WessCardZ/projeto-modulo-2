const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('perfil', 'aluno.ifal', 'aluno.ifal', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = dbSequelize;