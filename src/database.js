const sequelize = require('./models/sequelize');
const Chat = require('./models/chat');
const Event = require('./models/event');
const accelerationData = require("./models/accelerationData");

// Re-export all modules from the models directory
exports.sequelize = sequelize;
exports.Chat = Chat;
exports.Event = Event;
exports.accelerationData = accelerationData;