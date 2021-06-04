const {Router} = require('express');
const router = Router();

const authService = require('../services/authService');

router.post('/register' , async (req,res) => { 
    try {
        await authService.register(req.body)
        res.status(200).json("Successful register");
        console.log('in try');
    }catch(err) { 
        console.log('in catch');
        res.status(400).json(err);
    }
})

router.post('/test' , (req,res) => { 
    res.send(req.body)
})

module.exports = router;