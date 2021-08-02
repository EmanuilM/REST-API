const { Router } = require('express');
const router = Router();
const userService = require('../services/userService');
const userModel = require('../models/user');


router.get('/creatorData', async (req, res) => {
    try {
        const creatorData = await userService.getCreatorData(req.headers.referer.split('/details/')[1]);
        res.status(200).json(creatorData);


    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/currentUser' , async (req,res) => { 
        if(req.user) { 
            const currentUser =  await userService.getCurrentUserData(req.user._id);
           return res.status(200).json(currentUser);
        }
        res.json({});
})

router.post('/edit' , async (req,res) => { 

    try { 
        const editedUserData = await userService.editUserProfile(req.body.data , req.body.id);
        Promise.all([
           await userModel.updateOne({_id: req.user._id} , editedUserData)
        ]).then(result => {
           res.status(200).json({});
        }).catch((error) => { 
           res.status(400).json(error);
        })
      
    }catch(err) {
        res.status(400).json(err);  
    }
    
    
})

module.exports = router;