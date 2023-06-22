const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Local = require('./localModel')

const Perfil = db.define('perfil', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matricula: {
        type: DataTypes.INTEGER,
        unique: true
    },
    idade: {
        type: DataTypes.INTEGER,
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'perfil',
    timestamps: false
});

Perfil.belongsTo(Local, {
    as: 'localizacao',
    foreignKey: 'localizacao_id'
});


module.exports = Perfil;