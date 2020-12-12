const { Database } = require('sqlite');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

/**
 * @param {Promise<Database>} db
 */
const createUserTable = async (db) => {
	await db.exec(`CREATE TABLE IF NOT EXISTS users ( 
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name NVARCHAR(25) UNIQUE NOT NULL,
        password TEXT NOT NULL
        )`);
};

/**
 *
 * @param {Promise<Database>} db
 * @param {string} name
 * @param {string} password
 */
const insertUser = async (db, name, password) => {
	const hashPass = await bcrypt.hash(password, SALT_ROUNDS);
	return (await db).run(
		'INSERT INTO users (name, password) VALUES (?,?)',
		name,
		hashPass
	);
};

/**
 * Confirms wether the user (ie name/password pair) exists in the database
 * @param {Promise<Database>} db
 * @param {string} name
 * @param {string} password
 */
const confirmUser = async (db, name, password) => {
	//return true si l'utilisateur existe et que le password est bon
	const { password: dbHash } =
		(await (await db).get(
			'SELECT name, password FROM users WHERE name = ?',
			name
		)) || '';

	if (!dbHash) return false;

	return bcrypt.compare(password, dbHash);
};


/**
 * @param {Promise<Database>} db
 * @param {string} newUsername
 * @param {string} OldUsername
 */
const modifyUsername = async (db, newUsername, OldUsername) => {
	return (await db).run(
		'UPDATE users SET name = ? WHERE name = ?',
		newUsername,
		OldUsername
	);
};

/**
 * @param {Promise<Database>} db
 * @param {string} newPassword
 * @param {string} OldPassword
 * @param {string} username
 */
const modifyPassword = async (db, OldPassword, newPassword, username) => {
	if (confirmUser(db, username, OldPassword) == true) {
			const hashPass = await bcrypt.hash(newPassword, SALT_ROUNDS);
			return (await db).run(
			'UPDATE users SET password = ? WHERE password = ?',
			hashPass,
			OldPassword
		);
	}
};

/**
 * @param {Promise<Database>} db
 * @param {string} username
 */
const deleteAccount = async (db, username) => {
			return (await db).run(
			'DELETE FROM users WHERE name = ?',
			username
		);
};	



module.exports = {
	createUserTable,
	insertUser,
	confirmUser,
};
