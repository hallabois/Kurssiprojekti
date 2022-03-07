const sequelize = require('./models/sequelize');
const Chat = require('./models/chat');
const Event = require('./models/event');
const accelerationData = require("./models/accelerationData");

exports.sequelize = sequelize;
exports.Chat = Chat;
exports.Event = Event;
exports.accelerationData = accelerationData;