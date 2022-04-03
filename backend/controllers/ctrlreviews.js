/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('index', { title: 'Add review' });
};

module.exports = {
  addReview,
};
