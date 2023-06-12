const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('perfil', 'root', 'aluno.ifal22', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = dbSequelize;