const express = require('express');
const registerRouter = require('./register');
const loginRouter = require('./login');
const homeRouter = require('./home');
const optionRouter = require('./option');

const router = express.Router();

const getHomePage = function (req, res, next) {
	res.send(require('../pages/index')());
};

/* GET home page. */
router.get('/', getHomePage);
router.get('/index', getHomePage);

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/home', homeRouter);
router.use('/option', optionRouter);

module.exports = router;
