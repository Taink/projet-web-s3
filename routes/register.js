const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

/* GET register page. */
router.get('/', function (req, res, next) {
	res.send(require('../pages/register')());
});

/* POST register page. */
router.post('/', function (req, res, next) {
	let { Username: name, Password: pass, RepPassword: rpass } = req.body;
	res.redirect('/login');
	res.send(
		`Password for user ${name}: <pre>${pass}</pre> (confirmation: ${rpass})`
	);
});

module.exports = router;
