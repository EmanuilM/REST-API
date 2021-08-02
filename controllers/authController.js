const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');
const cfg = require('../config/config');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.post('/register', async (req, res) => {
    try {
        const token =  await authService.register(req.body)
        if (process.env.NODE_ENV === "production") {
            res.cookie(cfg.COOKIE_NAME, token, { httpOnly: true, secure: true });
        }else{ 
            res.cookie(cfg.COOKIE_NAME, token, { httpOnly: true });
        }
        res.status(200).json(token);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);
        if (process.env.NODE_ENV === "production") {
            res.cookie(cfg.COOKIE_NAME, token, { httpOnly: true,  secure : true});
        }else{ 
            res.cookie(cfg.COOKIE_NAME, token, { httpOnly: true  });
        }
        res.status(200).json(token);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout' , (req,res) => { 
    res.clearCookie(cfg.COOKIE_NAME);
    res.status(200).end();
});


module.exports = router;