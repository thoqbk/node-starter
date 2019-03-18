const moment = require('moment');
const log = require('log4js').getLogger();

const stringToDateTime = (s) => {
    return moment(s, 'DD/MM/YYYY HH:mm:ss').toDate();
}

const dateTimeToString = (dt) => {
    return moment(dt).format('DD/MM/YYYY HH:mm:ss');
}

const now = () => {
    return dateTimeToString(new Date());
}

const asyncMap = async (items, mapFx) => {
    if(items == null || items.length == 0) {
        return items;
    }
    let promises = [];
    for(let idx = 0; idx < items.length; idx++) {
        promises.push(mapFx(items[idx]));
    }
    return Promise.all(promises);
}

const loginRequired = async (req, res, next) => {
    if (req.user != null) {
        next();
    } else {
        res.redirect('/');
        log.info(`Login required for action: ${req.originalUrl}`);
    }
}

module.exports = {
    stringToDateTime,
    dateTimeToString,
    now,
    asyncMap,
    loginRequired,
}
