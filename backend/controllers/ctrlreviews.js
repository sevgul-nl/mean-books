/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('review-form', { title: 'Add review' });
};

module.exports = {
  addReview,
};
