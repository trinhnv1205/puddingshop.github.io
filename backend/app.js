// write a sample express server
const express = require('express');
const app = express();
const port = 3000;

// load the all the routes from the controllers folder
const controllers = require('./controllers');
app.use(controllers);

app.listen(port, () => console.log(`Backend listening on port ${port}`));