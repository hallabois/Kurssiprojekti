// Import the database module which contains the models
import { Event } from "../database";

// Lists Event entries in the database and returns them
// in the response body with status code 200
let list = async (ctx) => {
  const options = {};

  const events = await Event.findAll(options);

  const response = {
    results: events,
  };

  ctx.body = response;
};

// Creates a Chat entry in the database and returns it
// in the response body with status code 201.
// Fails with 500 if message was not provided
let create = async (ctx) => {
  const { body } = ctx.request;

  const { temperature, humidity } = body;

  const event = await Event.create({
    temperature,
    humidity,
  });

  ctx.body = event;
  ctx.status = 201;
};

export default { list, create };
