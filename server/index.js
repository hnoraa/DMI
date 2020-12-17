const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config.json');

const routes = require('./routes/index.js');

const app = express();

// settings
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/', routes.home);

app.listen(config.port, ()=> {
    console.log(`Server running on ${config.port}...`);
});