const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');

async function register(userData) { 
    const {username , password , RePassword} = userData;
    if(!username) { 
        throw({message : "Username is required!"});
    }
    if(!password) { 
        throw({message : "Password is required!"});
    }
    if(!RePassword) { 
        throw({message: "You must repeat your password!"});
    }
    if(password !== RePassword) { 
        throw({message : "Passowrd do not match!"});
    }

    const isUserExist = await userModel.findOne({username : username.toLowerCase()});
    if(isUserExist) { 
        throw({message : "This user already exist!"});
    }

    const user = new userModel({username : username.toLowerCase() , password});
    return  user.save();
   
}


async function login(userData) { 
    const {username , password} = userData;
    if(username === '' && password === '') { 
        throw({message : "All fields are required!"});
    }
    if(!username) { 
        throw({message : "Username is required!"});
    }
    if(!password) { 
        throw({message : "Password is required!"});
    }

    const isUserExists = await userModel.findOne({ username: userData.username.toLowerCase() });
    if (!isUserExists) {
        throw ({message :'This user does not exists!'});
    }

    const isPasswordMatch = await bcrypt.compare(userData.password, isUserExists.password);
    if (!isPasswordMatch) {
        throw Error('Invalid Password!');
    }

    const token = jwt.sign({_id : isUserExists._id} , config.SECRET_WORD);

    return token;
}

module.exports = { 
    register,
    login,
}