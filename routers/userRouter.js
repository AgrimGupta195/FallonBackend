const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protectRoute, isAdmin } = require('../middleware/authmiddleware');
const userController = require('../controllers/userController');

router.post('/login', adminController.loginAdmin);
router.post('/logout', adminController.logoutAdmin);
router.get('/profile', protectRoute,isAdmin,adminController.checkAuth);
router.get('/getFeedback', protectRoute,isAdmin,userController.getFeedback);
router.post('/postFeedback',userController.postFeedback);
module.exports = router;