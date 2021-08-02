const { Router } = require('express');
const router = Router();

const authController = require('./controllers/authController');
const offerController = require('./controllers/offerController');
const userController = require('./controllers/userController');

router.use('/api/auth' , authController);
router.use('/api/offers' , offerController);
router.use('/api/user' , userController);



module.exports = router;