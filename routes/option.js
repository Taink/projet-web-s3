// const { safeHtml } = require('common-tags');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

/* GET home page. */
router.get('/', async function (req, res, next) {
	// console.log(req.session);
	if (!req.session.username) return res.redirect('/login');

	res.send(require('../pages/option')(req.session.username));
});

module.exports = router;
