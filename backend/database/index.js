// const chalk = require('chalk');
// const {createConnection, getConnection} = require('typeorm');
// const Book = require('../models/book');
// const User = require('../models/user');

// createConnection({
//     type: 'sqlite',
//     cache: true,
//     migrationsRun: true,
//     // make books.db file in backend/database directory
//     database: './database/sqlite.db',
//     entities: [
//         Book,
//         User
//     ],
//     synchronize: true,
//     logging: false,
// }).then(connection => {
//     console.log(chalk.green('Database connection established successfully 🎉'));
// }).catch(error => console.log(error));

// const db = getConnection("default");

// module.exports = db;