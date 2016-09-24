const express = require('express');

// middleware
const morgan = require('morgan');
const parser = require('body-parser');

// router
const router = require('./routes');

// Stormpath for auth
const stormpath = require('express-stormpath');
const stormpathConfig = require('./config').stormpathConfig;

const app = express();
const defaultPort = require('./config').DEFAULT_PORT;

const port = process.env.PORT || defaultPort;

// Stormpath environment variables
const id = process.env.STORMPATH_CLIENT_APIKEY_ID || stormpathConfig.STORMPATH_CLIENT_APIKEY_ID;
const secret = process.env.STORMPATH_CLIENT_APIKEY_SECRET
  || stormpathConfig.STORMPATH_CLIENT_APIKEY_SECRET;
const href = process.env.STORMPATH_APPLICATION_HREF || stormpathConfig.STORMPATH_APPLICATION_HREF;

app.set('port', port);

// Stormpath init
app.use(stormpath.init(app, {
  apiKey: {
    id,
    secret,
  },
  application: {
    href,
  },
  website: true, // create /register /login & /logout routes
}));

// logging & parsing
app.use(morgan('dev'));
app.use(parser.json());

app.use('/', router);
app.use(express.static(`${__dirname}/../client`));

app.on('stormpath.ready', () => {
  console.log('Stormpath Ready!');

  app.listen(app.get('port'));
  console.log(`Harambe is listening on port ${app.get('port')}!`);
});

module.exports = app;
