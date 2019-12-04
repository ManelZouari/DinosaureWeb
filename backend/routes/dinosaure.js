const express = require('express');
const router = express.Router();
const dinosaureCtrl = require('../controllers/dinoseure');
const auth = require('../middleware/auth');


router.post('/signup', dinosaureCtrl.signup);
router.post('/login', dinosaureCtrl.login);
router.get('/every', dinosaureCtrl.getInformations);
//router.get('/all', dinosaureCtrl.getall);
router.put('/:id', dinosaureCtrl.modifyInformations);
router.get('/dinosaureProfile/:login',dinosaureCtrl.userProfile);
router.put('/modifyProfile/:login',dinosaureCtrl.modifyInformations);



module.exports = router;