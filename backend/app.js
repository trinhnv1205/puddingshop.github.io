// write a sample express server
const express = require('express');
const app = express();
const port = 3000;

// load the all the routes from the controllers folder
const controllers = require('./controllers');

// load the database connection
const chalk = require('chalk');
const { createConnection, getConnection } = require('typeorm');
const Book = require('./models/book');
const User = require('./models/user');

createConnection({
  type: 'sqlite',
  cache: true,
  migrationsRun: true,
  // make books.db file in backend/database directory
  database: './database/sqlite.db',
  entities: [
    Book,
    User
  ],
  synchronize: true,
  logging: false,
}).then(connection => {
  console.log(chalk.green('Database connection established successfully 🎉'));
  app.use(controllers);

  app.listen(port, () => console.log(chalk.red(`Backend listening on port ${port}`)));

}).catch(error => console.log(error));

const db = getConnection("default");

module.exports = db;