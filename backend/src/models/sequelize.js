const Sequelize = require('sequelize');

// Initialize local database file
const sequelize = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  // This path is relative to /backend folder unlike with require
  storage: './db/database.sqlite',
});

// Export the sequelize instance for use with models
module.exports = sequelize;
