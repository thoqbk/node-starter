const express = require('express');
const router = express.Router();
const log = require('log4js').getLogger();
const UserService = require('../services/user-service.js');

router.get('/who-am-i', async (req, res) => {
    log.info('Accessing who-am-i API');
    res.json({
        success: true,
        payload: await UserService.whoAmI()
    })
});

module.exports = router;
