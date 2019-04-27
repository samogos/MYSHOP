const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRoute = require('./controller/Route/index');
const product = require('./model/product');
const productsRoute = require('./controller/Route/products');
const adminRoute = require('./controller/Route/admin');
const productRoute = require('./controller/Route/show');


const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));



app.use(homeRoute);
app.use(productsRoute);
app.use(adminRoute);
app.use(productRoute);



mongoose.connect('mongodb+srv://samogos:V!ct0r123@sam-cluster0-uxqiu.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true }).then((result) => {
   

const port = 27017 || process.env.PORT

app.listen(port, () => console.log(`app listening on ${port}`)); 
})
.catch(err => console.log(err));


