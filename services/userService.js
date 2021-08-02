const userModel = require('../models/user');
const offerModel = require('../models/offersModel');
const bcrypt = require('bcrypt');

async function getCreatorData(id) {
    const offer = await offerModel.findById(id);
    const creatorDetails = await userModel.findById(offer.creator);
    return {
        email: creatorDetails.email,
        phoneNumber: creatorDetails.phoneNumber,
        username: creatorDetails.username,
        _id: creatorDetails._id,
    }
}

async function getCurrentUserData(id) {
    const userDetails = await userModel.findById(id);
    return {
        email: userDetails.email,
        username: userDetails.username,
        phoneNumber: userDetails.phoneNumber,
        offers: userDetails.offers,
        _id: userDetails._id
    }
}


async function editUserProfile(data, id) {
    const user = await userModel.findById(id);
    // console.log(data);
    if (!data.username || !data.email || !data.phoneNumber) {
        throw ({ message: "All filds are required!" });

    }
    if (!data.confirmPassword) {
        throw ({ message: "You must to enter your password!" });
    }
    const isValidPassword = await bcrypt.compare(data.confirmPassword, user.password);
    const isUserExist = await userModel.findOne({username : data.username.toLowerCase().trim()});
    const isEmailExist = await userModel.findOne({email : data.email.toLowerCase().trim()});
    const isPhoneExist = await userModel.findOne({phoneNumber : data.phoneNumber.toString().trim()});
    console.log(isUserExist)
    // console.log(isEmailExist)
    if (!isValidPassword) {
        throw ({ message: "Wrong password! Please try again" });
    }

    if (data.phoneNumber.toString().length > 10) {
        throw ({ message: 'Phone number must be 10 digits long!' });
    }
    if (data.phoneNumber.toString().length < 10) {
        throw ({ message: 'Phone number must be 10 digits long!' });
    }
    if (isUserExist) {
        throw ({ message: 'This username already exist!' });
    }
    if (isEmailExist) {
        throw ({ message: 'This email already exist!' });
    }
    if (isPhoneExist) {
        throw ({ message: 'This phone number already exist!' });
    }

    return {
        username: data.username.trim(),
        email: data.email.trim(),
        phoneNumber: data.phoneNumber.toString().trim(),
    }

}

module.exports = {
    getCreatorData,
    getCurrentUserData,
    editUserProfile,
}