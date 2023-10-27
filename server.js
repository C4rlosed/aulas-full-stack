const sequelize = require('.src/config/database.js');
// const User = require('./src/models/user');
// const Item = require('./src/models/item');

sequelize.sync().then(() => {
    console.log('Tabelas criadas.');
}).catch(error => {
    console.log('Erro ao criar tabelas.');
}); 