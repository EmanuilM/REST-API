const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');

const offerSchema = new mongoose.Schema({
    brand : { 
        type : String,
        required : true,
    },
    model : { 
        type : String,
        required : true,
    },
    year : { 
        type : Number,
        required : true,
    },
    color : { 
        type : String,
        required : true,
    },
    fuelType : { 
        type : String,
        required : true,
    },
    description : { 
        type : String,
        required : true,
        maxLength : 1000,
    },
    creator : {
        type : mongoose.Types.ObjectId,
        ref : 'user'
    }
})


module.exports = mongoose.model('offer' , offerSchema);