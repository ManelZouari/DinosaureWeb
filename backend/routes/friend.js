const express = require('express');
const router = express.Router();
const friendCtrl = require('../controllers/friend');



router.post('/addFriend', friendCtrl.addFriend);
router.delete('/deleteFriend/:login/:friend', friendCtrl.deleteFriend);
router.get('/listFriend/:login', friendCtrl.getFriends);
router.get('/listFriends/all', friendCtrl.allFriends);




module.exports = router;