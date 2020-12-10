const sqlite3 = require('sqlite3').verbose();
const { createUserTable } = require('./models/User');

const db = new sqlite3.Database(process.env.DB_PATH, (err) => {
	if (err) console.error(err);

	createUserTable(db);
});

module.exports = db;
