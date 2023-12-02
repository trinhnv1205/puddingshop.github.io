const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/books.db')

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT,
        description TEXT,
        price REAL,
        quantity INTEGER,
        image TEXT
    )`)
})

module.exports = db