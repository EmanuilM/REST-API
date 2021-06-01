const {Router} = require('express');
const router = Router();

const authService = require('../services/authService');

router.post('/register' , async (req,res) => { 
    try {
        res.status(200);
         return await authService.register(req.body);
    }catch(err) { 
        res.status(400).json(err);
    }
})

module.exports = router;