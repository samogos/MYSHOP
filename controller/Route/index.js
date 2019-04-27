const express = require('express');
const products = require('../../model/product'); 

const router = express.Router();

router.get('/', (req, res) => {

    products.find({}).then(products => {
        res.render('index', {products: products})
    })
    
  // res.render('index', {products: products})
})



module.exports = router;