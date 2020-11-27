const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

/* GET register page. */
router.get('/', function(req, res, next) {
    res.send(require('../pages/register')(
    
    ))
});

/* POST register page. */
router.post('/', function(req, res, next) {
    let { Username: name, Password: pass } = req.body;
    res.send(`Password for user ${name}: ${pass}`);
});

module.exports = router;
