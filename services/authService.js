const userModel = require('../models/user');

async function register(req,res) { 
    const {username , password , rePassword} = req.body
    if (password !== rePassword) {
        throw ({message : "Passwords do not match!"});
    }
    if(password === '') { 
        throw ({message : "Passwords is required!"});
    }

    const isUserExists = await userModel.findOne({ username: username.toLowerCase() });
    if (isUserExists) {
        throw ({message : "This user already exists!"});
    }
    const user = new userModel({ username: username.toLowerCase(), password : password });

    return user.save();

}

module.exports = { 
    register,
}