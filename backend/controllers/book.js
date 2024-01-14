const express = require('express');
const router = express.Router();

const BookService = require('../services/book');

/**
 * @swagger
 * /book/getall:
 *   get:
 *     summary: Returns the list of all the books
 *     responses:
 *       200:
 *         description: The list of the books
 */
router.get('/book/getall', (req, res) => {
    BookService.getBooks().then((books) => {
        res.json(books);
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
}
);

/**
 * @swagger
 * /book/get/{id}:
 *   get:
 *     summary: Returns a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The book
 */
router.get('/book/get/:id', (req, res) => {
    BookService.getBookById(req.params.id).then((book) => {
        res.json(book);
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
});

module.exports = router;