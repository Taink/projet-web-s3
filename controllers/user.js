const User = require('../db/models/User');
const db = require('../db/db');

async function login(name, pass) {
	return User.confirmUser(db, name, pass);
}

async function insert(name, pass) {
	return User.insertUser(db, name, pass);
}

module.exports = {
	login,
	insert,
};
