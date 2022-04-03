/* GET 'home' page */
const index = (req, res) => {
  res.render('index', { title: 'Books Review' });
};

/* GET 'Books List' page */
const list = (req, res) => {
  res.render('index', { title: 'Books List' });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('index', { title: 'Add review' });
};

module.exports = {
  index,
  list,
  addReview,
};
