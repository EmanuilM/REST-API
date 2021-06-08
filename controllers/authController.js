const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');

router.post('/register', async (req, res) => {
    try {
        await authService.register(req.body)
        res.status(200).json("Successful register");
    } catch (err) {
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
        res.status(400).json(err);
    }
});


module.exports = router;