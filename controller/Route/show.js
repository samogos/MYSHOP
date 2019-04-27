const express = require('express');
const router =  express.Router();
const products = require('../../model/product')

router.get('/products/:id', (req, res) => {
   
    console.log('this is the show page');
    let prodId = req.params.id;
    products.findById(prodId, (err, foundProduct) =>
    {
        if(err){
         return   console.log(err)
        }
        console.log(foundProduct);
        res.render('show', {product: foundProduct});
    }) 
})

module.exports = router