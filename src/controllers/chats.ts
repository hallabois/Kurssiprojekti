// Import the database module which contains the models
import { Chat } from "../database";

// Lists Chat entries in the database and returns them
// in the response body with status code 200
let list = async (ctx) => {
  const options = {};

  const chats = await Chat.findAll(options);

  const response = {
    results: chats,
  };

  ctx.body = response;
};

// Creates a Chat entry in the database and returns it
// in the response body with status code 201.
// Fails with 500 if message was not provided
let create = async (ctx) => {
  const { body } = ctx.request;

  const { message } = body;

  const chat = await Chat.create({ message });

  ctx.body = chat;
  ctx.status = 201;
};

export default { list, create };
