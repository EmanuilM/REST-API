const { Router } = require('express');
const router = Router();

const authController = require('./controllers/authController');

router.use('/auth' , authController);



module.exports = router;