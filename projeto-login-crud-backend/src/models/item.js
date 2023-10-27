//Criando parâmetros da tabela de itens
//DataTypes: tipos de dados diferente em queries (int, varchar, etc)

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('Item', {
    // Definir os itens da tabela de itens (campos)
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    imgURL:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Item;