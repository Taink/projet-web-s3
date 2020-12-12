const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const { createUserTable } = require('./models/User');

const db = open({
	filename: process.env.DB_PATH,
	driver: sqlite3.cached.Database,
}).then((db) => {
	createUserTable(db);

	return db;
});

module.exports = db;
