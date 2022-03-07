const app = require('./src/app');
const db = require('./src/database');

const port = process.env.PORT || 9000;

console.log("Starting up...");
db.sequelize.sync().then(() => {
  console.log("Connected to db!");
  app.listen(port);
  console.log(`App listening on port ${port}`);
});
