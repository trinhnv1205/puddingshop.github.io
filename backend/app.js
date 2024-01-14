// app.js
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
const bodyParser = require("body-parser");
const express = require('express');
const chalk = require('chalk');
const controllers = require('./controllers');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(controllers);

app.listen(port, () => console.log(chalk.red(`Backend listening on port ${port}`)));