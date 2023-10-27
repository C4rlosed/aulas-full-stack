// Abrir conexão com o banco de dados
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('projeto-login-crud', 'root', '',
{
    host:'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;