import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Serve from 'koa-static';
import router from './routes/router'
const session = require('koa-generic-session');
const convert = require('koa-convert');
const CSRF = require('koa-csrf');
const helmet = require("koa-helmet");

const app = new Koa();

app.keys = [ 'a', 'b' ];
 
//Security middleware
app.use(helmet());

//Session support
app.use(convert(session()));

//body formatting
app.use(bodyParser());

//static files
app.use(Serve('/usr/src/app/node_modules'));
app.use(Serve('/usr/src/app/dist/'));

//security csrf token manager
//only do token authentication for /app paths
app.use(new CSRF({
    invalidSessionSecretMessage: 'Invalid session secret',
    invalidSessionSecretStatusCode: 403,
    invalidTokenMessage: 'Invalid CSRF token',
    invalidTokenStatusCode: 403,
    excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
    disableQuery: false
  }));


//local api
app.use(router);

app.listen(8000);

console.log('Server running');