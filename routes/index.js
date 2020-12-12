const express = require('express');
const registerRouter = require('./register');
const loginRouter = require('./login');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send(require('../pages/index')());
});

router.use('/register', registerRouter);
router.use('/login', loginRouter);

module.exports = router;
