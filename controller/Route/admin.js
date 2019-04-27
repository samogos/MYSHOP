const express = require('express');
const product = require('../../model/product');
const router = express.Router();



router.get('/product/new', (req, res) => {
    res.render('product');
});

module.exports = router;