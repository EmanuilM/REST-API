const cfg = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => { 
    const token = req.cookies[cfg.COOKIE_NAME];
    if(token) { 
        jwt.verify(token , cfg.SECRET_WORD , (err , decoded) => { 
            err ? console.log(err) : 
            req.user = decoded;
            res.locals.user = decoded;
            res.locals.isAuth = true;
        });
    }

    next();

}