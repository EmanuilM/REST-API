const user = require('../models/user');
const userModel = require('../models/user');

async function register(userData) { 
    const {username , password , RePassword} = userData;
    console.log(userData);
    if(username === '') { 
        throw({message : "Username is required!"});
    }
    if(password === '') { 
        throw({message : "Password is required!"});
    }
    if(password !== RePassword) { 
        throw({message : "Passowrd do not match!"});
    }

    const isUserExist = await userModel.findOne({username : username.toLowerCase()});
    if(isUserExist) { 
        throw({message : "This user already exist!"});
    }

    const user = new userModel({username : username.toLowerCase(),password});
    return  user.save();
   
}

module.exports = { 
    register,
}