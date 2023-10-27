//Criando parâmetros da tabela de itens
//DataTypes: tipos de dados diferente em queries (int, varchar, etc)
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('User', {
    // Definir os itens da tabela de usuários (campos)
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    passwor:{
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = User;