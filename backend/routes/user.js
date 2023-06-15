const express = require('express');
const passport = require('passport');
const {
  getUsers,
  updateMe,
  deleteMe,
  getMe,
  getUser,
  uploadUserPhoto,
  resizePhoto,
} = require('../controllers/user');
const {
  register,
  login,
  protect,
  forgotPassword,
  resetPassword,
  updatePassword,
  logout,
  isLoggedIn,
  restrictTo,
} = require('../controllers/auth');

const router = express.Router();


router.route('/isLoggedIn').get(isLoggedIn)
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/user/:id').get(getUser);


router.route('/').get(getUsers);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').patch(resetPassword);

router.use(protect);

router.route('/updatePassword').patch(updatePassword);
router.route('/me').get(getMe, getUser);
router.route('/updateMe').patch(uploadUserPhoto, resizePhoto, updateMe);
router.route('/deleteMe').delete(deleteMe);

router.use(restrictTo('owner', 'admin'))
router.route('/register').post(register);

module.exports = router;
