const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('kcors');

const chats = require('./controllers/chats');
const accel = require('./controllers/accelerationDatum');
const greeting = require('./controllers/greeting');
const events = require('./controllers/events');

const app = new Koa();

app.use(logger());

app.use(cors({ credentials: true }));
app.use(bodyParser());

const publicRouter = new Router({ prefix: '/api' });

publicRouter.post('/chats', chats.create);
publicRouter.get('/chats', chats.list);

publicRouter.post('/acceleration', accel.create);
publicRouter.get('/acceleration', accel.list);

publicRouter.post('/events', events.create);
publicRouter.get('/events', events.list);

publicRouter.get('/greeting', greeting.greet);

app.use(publicRouter.routes());
app.use(publicRouter.allowedMethods());

module.exports = app;
