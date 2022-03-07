const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
//   username: 'root',
//   password: 'password',
//   database: 'project',
//   // This is the service name defined in docker-compose
//   host: 'database',
//   dialect: 'postgres',
//   logging: false,
//   operatorsAliases: '0',
//   pool: {
//     max: 30,
//     min: 1,
//     idle: 200000,
//     acquire: 1000000,
//   },
// });

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/database.sqlite',
  logging: false,
  operatorsAliases: '0',
  pool: {
    max: 30,
    min: 1,
    idle: 200000,
    acquire: 1000000,
  },
});

module.exports = sequelize;
