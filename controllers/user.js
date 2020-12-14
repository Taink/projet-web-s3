const User = require('../db/models/User');
const db = require('../db/db');

async function login(name, pass) {
	return User.confirmUser(db, name, pass);
}

async function insert(name, pass) {
	return User.insertUser(db, name, pass);
}

async function getUserIDFromName(name) {
	return User.userIDFromName(db, name);
}

async function modifyPassword(name, oldPass, newPass) {
	return User.modifyPassword(db, oldPass, newPass, name);
}

async function modifyUsername(name, id) {
	return User.modifyUsername(db, name, id);
}

async function getUserFromID(id) {
	return User.userFromID(id);
}

module.exports = {
	login,
	insert,
	getUserIDFromName,
	modifyUsername,
	modifyPassword,
	getUserFromID,
};
