const offerModel = require('../models/offerModel');

async function createCarOffer(data) { 
    const { brand , model ,  year , color , fuelType , description} = data; 
    if(brand ===  '') { 
        throw({message:  "Brand is required!"})
    }
    if(model ===  '') { 
        throw({message:  "Model is required!"})
    }
    if(year ===  '') { 
        throw({message:  "Year is required!"})
    }
    if(color ===  '') { 
        throw({message:  "Color is required!"})
    }
    if(fuelType ===  '') { 
        throw({message:  "Fuel type is required!"})
    }
    if(description ===  '') { 
        throw({message:  "description is required!"})
    }

    const offerDetails = new offerModel(data);
    offerDetails.save();


}

module.exports = {
    createCarOffer
}