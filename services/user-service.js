const _ = require('lodash');
const User = require('../db.js').models.User;

const whoAmI = async () => {
    let totalUsers = await User.count();
    return `I don\'t know. Total user: ${totalUsers}`;
}

module.exports = {
    whoAmI,
}
