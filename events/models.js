const UserSchema = require('mongoose').model('User').schema;

const log = require('log4js').getLogger();

UserSchema.on('create', async post => {
    log.info('A user created');
});
