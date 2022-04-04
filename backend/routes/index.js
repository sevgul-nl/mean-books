const express = require('express');
const router = express.Router();
//const ctrlMain = require('../controllers/main');

const ctrlBooks = require('../controllers/ctrlbooks');
const ctrlReviews = require('../controllers/ctrlreviews');
const ctrlAbout = require('../controllers/ctrlabout');

router.get('/', ctrlBooks.list);
router.get('/list', ctrlBooks.list);
router.get('/details', ctrlBooks.details);
router.get('/review/add', ctrlReviews.addReview);
router.get('/about', ctrlAbout.about);

module.exports = router;
