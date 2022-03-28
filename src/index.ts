import app from "./app";
import { sequelize } from "./database";

const port = process.env.PORT || 9000;

console.log("Starting up...");
// Create missing tables in the database and start the server
// NOTE: sequelize.sync does not update the table schema
sequelize.sync().then(() => {
  console.log("Connected to db!");
  // Start the Koa HTTP server
  app.listen(port);
  console.log(`App listening on port ${port}`);
});
