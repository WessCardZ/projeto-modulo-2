const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('perfil', 'root', 'mysql', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = dbSequelize;