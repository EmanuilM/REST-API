const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username :  { 
        type: String,
        required : true,
        minlength : [4 , "Username should be at least 4 characters long!"]
    },
    password : { 
        type : String,
        required : true,
    }
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