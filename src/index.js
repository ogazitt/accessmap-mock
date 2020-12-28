const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.API_PORT || 9001;

app.use(bodyParser.json());

// register the permissions api handlers
const api = require('./api');
api.register(app);

app.listen(port, () => console.log(`Permissions API Server listening on port ${port}`));
