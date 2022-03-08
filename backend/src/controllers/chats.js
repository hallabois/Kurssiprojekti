// Import the database module which contains the models
const database = require('../database');

// Lists Chat entries in the database and returns them
// in the response body with status code 200
exports.list = async (ctx) => {
  const options = {};

  const chats = await database.Chat.findAll(options);

  const response = {
    results: chats,
  };

  ctx.body = response;
};

// Creates a Chat entry in the database and returns it
// in the response body with status code 201.
// Fails with 500 if message was not provided
exports.create = async (ctx) => {
  const { body } = ctx.request;

  const { message } = body;

  const chat = await database.Chat.create({ message });

  ctx.body = chat;
  ctx.status = 201;
};
