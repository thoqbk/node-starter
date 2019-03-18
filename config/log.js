/**
* Log4js configuration
*/
module.exports = {
  appenders: {
    default: {
      type: 'dateFile',
      filename: 'storage/info',
      'pattern': '.log',
      alwaysIncludePattern:true
    },
    error: {
      type: 'dateFile',
      filename: 'storage/error',
      'pattern': '.log',
      alwaysIncludePattern:true,
      level: 'error'
    },
    errorsFilter: { type: 'logLevelFilter', appender: 'error', level: 'error'}
  },
  categories: {
    default: {
      appenders: ['default', 'errorsFilter'],
      level: 'info'
    }
  }
}
