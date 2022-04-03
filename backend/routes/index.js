const APPREFIX = '/abooks';
const express = require('express');
const router = express.Router();
//const ctrlMain = require('../controllers/main');

const ctrlBooks = require('../controllers/ctrlbooks');
const ctrlReviews = require('../controllers/ctrlreviews');
const ctrlAbout = require('../controllers/ctrlabout');

router.use(APPREFIX, router);
router.get('/', ctrlBooks.list);
router.get('/list', ctrlBooks.list);
router.get('/review/add', ctrlReviews.addReview);
router.get('/about', ctrlAbout.about);

//router.use('/abooks/', router);
//router.get('/list', ctrlLocations.locationInfo);
//router.get('/reviews/new', ctrlReview.addReview);
//router.get('/about', ctrlOthers.ctrlAbout);
module.exports = router;
