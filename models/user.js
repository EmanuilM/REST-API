const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const userSchema = new mongoose.Schema({
    email : { 
        type:String,
        required : true,
    },
    phoneNumber : {
        type:String,
        required : true,
    },
    username :  { 
        type: String,
        required : true,
        minlength : [4 , "Username should be at least 4 characters long!"]
    },
    password : { 
        type : String,
        required : true,
        minlength : [4 , "Password should be at least 4 characters long!"]
    },
    offers : [],
})

userSchema.pre('save' , function(next) { 
    bcrypt.genSalt(10)
    .then(salt => { 
        return bcrypt.hash(this.password , salt)
    })
    .then(hash => { 
        this.password = hash;
        next();
    })
    .catch(err => {
        console.log(err);
    })
});

module.exports = mongoose.model('user' , userSchema);