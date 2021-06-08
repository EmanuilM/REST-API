const { Router } = require('express');
const router = Router();
const offerService = require('../services/offerService');

router.post('/create' , async (req,res) => { 
    try { 
        await offerService.createCarOffer(req.body);
    }catch(err) { 
        res.status(400).json(err);
    }
});

module.exports = router;