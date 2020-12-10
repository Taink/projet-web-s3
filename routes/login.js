const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

/* GET register page. */
router.get('/', function (req, res, next) {
	res.send(require('../pages/login')());
});

/* POST register page. */
router.post('/', function (req, res, next) {
	let { Username: name, Password: pass } = req.body;
	// let boolean = userController.login(name, pass)
	// redirect to profile page if name and pass are correct
	// otherwise redirect to login saying it was incorrect
	//
	res.send(`Password for user ${name}: ${pass}`);
});

module.exports = router;
