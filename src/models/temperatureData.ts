import Sequelize from "sequelize";
import sequelize from "./sequelize";

const temperatureData = sequelize.define(
  "temperatureData",
  {
    temp: Sequelize.INTEGER,
  },
  {
    timestamps: true,
  }
);

// toJSON method is automatically called when the object is serialized in Koa
temperatureData.prototype.toJSON = function toJSON() {
  return {
    // This is a unique id for each entry
    id: this.id,
    // Id and timestamps are generated automatically
    createdAt: this.createdAt,

    // Message was added on the POST request
    temp: this.temp,
  };
};

export default temperatureData;
