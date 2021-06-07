const { Router } = require('express');
const router = Router();

const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authService = require('../services/authService');

router.post('/register', async (req, res) => {
    try {
        await authService.register(req.body)
        res.status(200).json("Successful register");
        console.log('in try');
    } catch (err) {
        console.log('in catch');
        res.status(400).json(err);
    }
});


router.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);
        if (process.env.NODE_ENV === "production") {
            res.cookie("SESSION_TOKEN", token, { httpOnly: true, secure: true });
        }else{ 
            res.cookie("SESSION_TOKEN", token, { httpOnly: true });
        }
        res.status(200).json(token);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;