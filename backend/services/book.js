const Book = require('../models/book');
const db = require('../database/index'); // Import the database module is sqlite3

class BookService {
    static addBook = async (book) => {
        let sql = `INSERT INTO books(title, author, description, price, quantity, image) VALUES(?,?,?,?,?,?)`;
        let params = [book.title, book.author, book.description, book.price, book.quantity, book.image];
        return new Promise((resolve, reject) => {
            db.run(sql, params, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(this.lastID);
                }
            });
        });
    };
    static getBooks = async () => {
        let sql = `SELECT * FROM books`;
        return new Promise((resolve, reject) => {
            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                }
                else {
                    let books = [];
                    rows.forEach((row) => {
                        books.push(new Book(row.id, row.title, row.author, row.description, row.price, row.quantity, row.image));
                    });
                    resolve(books);
                }
            });
        });
    };
    getBookById = async (id) => {
        let sql = `SELECT * FROM books WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.get(sql, [id], (err, row) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (row) {
                        resolve(new Book(row.id, row.title, row.author, row.description, row.price, row.quantity, row.image));
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        });
    };
    updateBook = async (id, book) => {
        let sql = `UPDATE books SET title = ?, author = ?, description = ?, price = ?, quantity = ?, image = ? WHERE id = ?`;
        let params = [book.title, book.author, book.description, book.price, book.quantity, book.image, id];
        return new Promise((resolve, reject) => {
            db.run(sql, params, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(this.changes);
                }
            });
        });
    };
    deleteBook = async (id) => {
        let sql = `DELETE FROM books WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.run(sql, id, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(this.changes);
                }
            });
        });
    }
}

module.exports = BookService;