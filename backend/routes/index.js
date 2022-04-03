const APPREFIX = '/abooks';
const express = require('express');
const router = express.Router();
//const ctrlMain = require('../controllers/main');

const ctrlBookList = require('../controllers/blist');
const ctrlBookDetail = require('../controllers/bdetail');
const ctrlAddReview = require('../controllers/addreview');
const ctrlAbout = require('../controllers/about');

router.use(APPREFIX, router);
router.get('/', ctrlMain.index);
router.get('/list', ctrlMain.list);
router.get('/review/add', ctrlMain.addReview);
//router.use('/abooks/', router);
//router.get('/list', ctrlLocations.locationInfo);
//router.get('/reviews/new', ctrlReview.addReview);
//router.get('/about', ctrlOthers.ctrlAbout);
module.exports = router;
