const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({timestamp: new Date()});
});

router.get('/about', (req, res) => {
    const pkg = require('../package.json');

    res.send({name: pkg.name, description: pkg.description, author: pkg.author, version: pkg.version });
});

module.exports = router;