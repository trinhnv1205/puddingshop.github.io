const express = require('express');
const router = express.Router();

const BookService = require('../services/book');

router.get('/book/getall', (req, res) => {
    BookService.getBooks().then((books) => {
        res.json(books);
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
}
);

module.exports = router;