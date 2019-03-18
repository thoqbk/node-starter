const config = require('./config/app.js');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const db = require('./db');

const maxAgeInSeconds = 3650 * 24 * 60 * 60;

module.exports = session({
    secret: config.sessionSecret,
    name: 'node-starter',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
    cookie: {
        maxAge: maxAgeInSeconds * 1000,
        // TODO: must enable it
        // secure: process.env.NODE_ENV == 'production',
    },
    store: new MongoStore({
        mongooseConnection: db.Mongoose.connection,
        ttl: maxAgeInSeconds,
    }),
});
