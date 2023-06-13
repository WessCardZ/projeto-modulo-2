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
        type: DataTypes.DATE,
    },
    cpf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'perfil',
    timestamps: false
});

Local.hasOne(Perfil, { as: 'perfil', foreignKey: 'localizacao_id' });
Perfil.belongsTo(Local, {
    as: 'localizacao',
    foreignKey: 'localizacao_id'
})

module.exports = Perfil;