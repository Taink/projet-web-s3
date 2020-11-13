const express = require('express');
const router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register!', message: 'Wooooaoaw' });
});

/* POST register page. */
router.post('/', function(req, res, next) {
  res.send('Post request received!');
});

module.exports = router;
