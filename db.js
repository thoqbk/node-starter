const config = require('./config/app.js');
const Mongoose = require('mongoose');

const log = require('log4js').getLogger();

Mongoose.set('useCreateIndex', true);

Mongoose.connect(config.mongodb.url, {useNewUrlParser: true});

Mongoose.connection.on('error', (err) => {
    log.error('DB error: %s', err);
});

module.exports = {
    Mongoose,
    models: {
        User: require('./models/user'),
    }
}