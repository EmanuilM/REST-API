const user = require('../models/user');
const userModel = require('../models/user');

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

    const isUserExist = await userModel.findOne({username});
    if(isUserExist) { 
        throw({message : "This user already exist!"});
    }

    const user = new userModel({username,password});
    return  user.save();
   
}

module.exports = { 
    register,
}