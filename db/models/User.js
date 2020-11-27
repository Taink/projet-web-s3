const { Database } = require("sqlite3");

/**
 * @param {Database} db
 */
const createUserTable = (db) => {
    db.run(`CREATE TABLE users ( 
        user_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name NVARCHAR(25) UNIQUE NOT NULL,
        password TEXT NOT NULL
        )`, (err) =>{
            if (err) {
                // table already exists
            } else {

            }
        })
}
