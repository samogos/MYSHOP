const mongoose = require('mongoose');

const userSchema = new mongooese.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }    

});

module.export = mongoose.model('User', userSchema);