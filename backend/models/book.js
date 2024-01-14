const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Book',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        title: {
            type: 'text'
        },
        author: {
            type: 'text'
        },
        description: {
            type: 'text'
        },
        price: {
            type: 'double'
        },
        quantity: {
            type: 'int'
        },
        image: {
            type: 'text'
        }
    }
});