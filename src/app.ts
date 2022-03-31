import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import cors from "kcors";

import chats from "./controllers/chats";
import accel from "./controllers/accelerationDatum";
import greeting from "./controllers/greeting";
import events from "./controllers/events";
import temps from "./controllers/temps";

// Create a new Koa instance for our API
const app = new Koa();

// Use the koa-logger middleware to display the summary of
// requests and responses in the console
app.use(logger());

// Set up CORS middleware to tell the browser
// that requests from all domains are allowed
app.use(cors({ credentials: true }));

// Set up JSON parsing for request bodies.
// Allows the use of `ctx.request.body
app.use(bodyParser());

// A Koa router for connecting endpoints to middleware. This router is
// called a "public router" as it has no authentication and is
// available for everyone on the insternet
const publicRouter = new Router({ prefix: "/api" });

// Connect endpoints to middleware
publicRouter.post("/chats", chats.create);
publicRouter.get("/chats", chats.list);

publicRouter.post("/acceleration", accel.create);
publicRouter.get("/acceleration", accel.list);
publicRouter.delete("/acceleration", accel.clear);

publicRouter.post("/temperature", temps.create);
publicRouter.get("/temperature", temps.list);
publicRouter.delete("/temperature", temps.clear);

publicRouter.post("/events", events.create);
publicRouter.get("/events", events.list);

publicRouter.get("/greeting", greeting.greet);

// Add the router middleware to the Koa instance
app.use(publicRouter.routes());

// Add a middleware for responding to OPTIONS with a list of
// allowed methods
app.use(publicRouter.allowedMethods());

export default app;
