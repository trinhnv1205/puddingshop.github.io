class Book {
    constructor(id, title, author, description, price, quantity, image) {
        this.table = 'books';
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }
}

module.exports = Book;