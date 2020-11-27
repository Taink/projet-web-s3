const express = require('express');
const registerRouter = require('./register')
const loginRouter = require('./login')

const { html } = require('common-tags');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	const myComplexVar = {
		id: 'fzeqf',
		test: 'zfqefzqf'
	}
	
	res.send(html`
	<div>
		<p>${myComplexVar.id} - ${myComplexVar.test}</p>
	</div>
	`)
});

router.use('/register', registerRouter);
router.use('/login', loginRouter);

module.exports = router;
