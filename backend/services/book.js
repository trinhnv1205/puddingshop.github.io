const db  = require('../database/index');
const Book = require('../models/book');

class BookService {
    static addBook = async (book) => {
        const bookRepository = await db.getRepository(Book);
        const newBook = bookRepository.create(book);
        await bookRepository.save(newBook);
    };

    static getBooks = async () => {
        const bookRepository = db.getRepository(Book);
        return await bookRepository.find();
    };

    static getBookById = async (id) => {
        const bookRepository = db.getRepository(Book);
        return await bookRepository.findOne({where: {id: id} });
    };

    static updateBook = async (id, book) => {
        const bookRepository = db.getRepository(Book);
        await bookRepository.update({where: {id: id} }, book);
    };

    static deleteBook = async (id) => {
        const bookRepository = db.getRepository(Book);
        await bookRepository.delete({where: {id: id} });
    }
}

module.exports = BookService;