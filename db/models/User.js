const { Database } = require('sqlite3');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * @param {Database} db
 */
const createUserTable = (db) => {
	let stmt = db.prepare(
		`CREATE TABLE IF NOT EXISTS users ( 
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name NVARCHAR(25) UNIQUE NOT NULL,
        password TEXT NOT NULL
        )`,
		(err) => {
			if (err) {
				console.error('table already exists');
			} else {
				console.log('Creation successful');
			}
		}
	);
	stmt.run();
};

const insertUser = (db, name, password) => {
	let stmt = db.prepare(`INSERT INTO users (name,password) VALUES(?,?) `);
	bcrypt.hash(password, saltRounds, function (err, hash) {
		stmt.run(name, hash);
	});
};

const confirmUser = (db, name, password) => {
	//return true si l'utilisateur existe et que le password est bon
	let stmt = db.prepare(
		`SELECT name Name,password Password FROM users WHERE name=?`
	);
	db.get(stmt, name, (err, row) => {
		if (err) {
			console.error('Username/password not found');
			return false;
		} else {
			let dbHash = row.password;
			bcrypt.compare(password, dbHash, function (err, result) {
				if (result === true) {
					console.log("it's a match :)");
					return true;
				} else {
					console.error('Wrong password :(');
					return false;
				}
			});
		}
	});
};

module.exports = {
	createUserTable,
	insertUser,
	confirmUser,
};
