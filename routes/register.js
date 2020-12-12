const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { safeHtml } = require('common-tags');

/* GET register page. */
router.get('/', function (req, res, next) {
	res.send(require('../pages/register')());
});

/* POST register page. */
router.post('/', function (req, res, next) {
	let { Username: name, Password: pass, RepPassword: rpass } = req.body;
	if (!name || !pass || !rpass) {
		return res.send(require('../pages/register')('A field is missing!'));
	}
	if (pass !== rpass) {
		return res.send(
			require('../pages/register')('The two passwords are different!')
		);
	}
	userController.insert(safeHtml`${name}`, pass).then((result) => {
		console.log(result.changes.toString());
		res.redirect('/login');
	});
});

module.exports = router;
