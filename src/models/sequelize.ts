import { Sequelize } from "sequelize";

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // Initialize local database file
  sequelize = new Sequelize({
    logging: false,
    dialect: "sqlite",
    // This path is relative to /backend folder unlike with require
    storage: "./db/database.sqlite",
  });
}

export default sequelize;
