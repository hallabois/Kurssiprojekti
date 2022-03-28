// Import the sequelize library
import Sequelize from "sequelize";

// Import the sequelize instance which has been configured for SQLite
import sequelize from "./sequelize";

// Initialize the events table with two numerical fields: temperature
// and humidity
const Event = sequelize.define(
  "events",
  {
    temperature: Sequelize.FLOAT,
    humidity: Sequelize.FLOAT,
  },
  {
    timestamps: true,
  }
);

export default Event;
