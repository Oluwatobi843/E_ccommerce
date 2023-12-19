const path  = require('path');
const express = require('express');


const rootDir = require('../util/path');
const adminData = require('./admin');

router = express.Router();

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products)
    res.sendFile(path.join(rootDir,  'views', 'shop.html'));
});

module.exports = router;
