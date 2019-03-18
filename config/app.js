const path = require('path');

const config = {
    baseUrl: 'http://localhost:3000/',
    log: require('./log.js'),
    mongodb: {
        url: 'mongodb://127.0.0.1:27017/NodeStarter'
    },
    disableCORSCheck: false,
    corsWhitelist: ['http://localhost:3000', 'https://api.graphtable.com'],
    sessionSecret: "1112222<RandomString>",
    staticDirectoryPath: path.join(__dirname, '../public'),
}

if(process.env.NODE_ENV == 'production') {
    // Update production configs here:
}

module.exports = config;
