const { safeHtml } = require('common-tags');
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

	name = safeHtml`${name}`;

	userController.login(name, pass).then((loggedIn) => {
		if (loggedIn) {
			return res.send(safeHtml`Password for user ${name}: ${pass}`);
		}
		return res.send(require('../pages/login')('Wrong name/password pair!'));
	});
});

module.exports = router;
