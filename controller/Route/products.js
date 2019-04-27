const express = require('express');
const prodModel = require('../../model/product');


const router = express.Router();



router.post('/products', (req, res) => {
    // let product = new prodModel;
     
   // const img = req.body.image;
    //const price = req.body.price;
    // product = {image: img, price:price};
    //product.save((err, product) =>{
      //  if(err => console.log(err))
       // console.log(product);
       // res.redirect('/');
   // })
   let image = req.body.image;
   let price = req.body.price;
   let product = {price:price, image:image};
  
   let newProd = new prodModel(product);

   newProd.save().then(product => {
      console.log(product);
       
       res.redirect('/');
       //res.send('you hit the post route') ;
   }).catch(err => {
       console.log(err);
   })
    
})

module.exports = router;