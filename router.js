const { Router } = require('express');
const router = Router();

const authController = require('./controllers/authController');
const offerController = require('./controllers/offerController');

router.use('/auth' , authController);
router.use('/offer' , offerController);



module.exports = router;