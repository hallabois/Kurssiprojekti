const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const accelerationData = sequelize.define('accelerationData', {
  x: Sequelize.INTEGER,
  y: Sequelize.INTEGER,
  z: Sequelize.INTEGER,
}, {
  timestamps: true,
});

// toJSON method is automatically called when the object is serialized in Koa
accelerationData.prototype.toJSON = function toJSON() {
  return {
    // This is a unique id for each entry
    id: this.id,
    // Id and timestamps are generated automatically
    createdAt: this.createdAt,

    // Message was added on the POST request
    x: this.x,
    y: this.y,
    z: this.z,
  };
};

module.exports = accelerationData;