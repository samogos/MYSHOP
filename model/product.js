const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
   /* name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    }, */
    price: Number /*{
        type: Number,
        required: true
    }*/, 
    image: String /*{
        type: String,
        required: true
    }*/
});

module.exports = mongoose.model('Product', prodSchema);