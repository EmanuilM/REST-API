const {Router} = require('express');
const router = Router();

const authService = require('../services/authService');

router.post('/register' , authService.register)

module.exports = router;