const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'User',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        username: {
            type: 'text'
        },
        password: {
            type: 'text'
        },
        email: {
            type: 'text'
        },
        address: {
            type: 'text'
        },
        phone: {
            type: 'text'
        },
        role: {
            type: 'text'
        },
        image: {
            type: 'text'
        }
    }
});