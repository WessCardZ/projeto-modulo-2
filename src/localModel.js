const { Sequelize, DataTypes } = require('sequelize');

const db = require('./db');

const Localizacao = db.define('localizacao', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'localizacao',
    timestamps: false
});

module.exports = Localizacao;