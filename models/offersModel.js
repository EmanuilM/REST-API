const mongoose = require('mongoose');


const offerSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    power: {
        type: Number,
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    populatedState: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    condition : {
        type: String,
        required: true,
    },
    doors: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    engineType: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    imageURLs : [],
    imageIds : [],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
})




module.exports = mongoose.model('offers', offerSchema);