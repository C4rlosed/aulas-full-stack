const sequelize = require('.src/config/database');
const dbName = 'projeto-crud-node'

sequelize.query(`CREATE DATABASE ${dbName};`).then(() => {
    // se DB foi criado com sucesso (exibir mensagem e fechar query)
    console.log(`Database "${dbName}" created with sucessful!`);
    sequelize.close();
}).catch(error => {
    // se DB não foi criado (algum erro)
    console.log(`Error, Database "${dbName}" not created: ${error.message}`);
    sequelize.close();
})