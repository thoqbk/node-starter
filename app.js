const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

const users = require('./routes/users');

const config = require('./config/app.js');
const log4js = require('log4js');
log4js.configure(config.log);

var app = express();

app.use(require('./session'));

// cors
const corsOptions = {
    origin: function (origin, callback) {
        let b = config.disableCORSCheck
        || config.corsWhitelist.indexOf(origin) !== -1
        || origin == null
        // not start with http or https
        || origin.toLowerCase().indexOf('http') != 0;
        if (b) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

app.use((req,res,next) => {
    res.locals.req = req;
    next();
});

app.use('/api/users', users);

// events
require('./events/index.js');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    if(err != null && err.message != null) {
        res.json({
            success: false,
            errorMessage: err.message
        });
    } else {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    }
});

const getApp = async () => {
    return app;
}

module.exports = getApp;

global.appRoot = path.resolve(__dirname);
