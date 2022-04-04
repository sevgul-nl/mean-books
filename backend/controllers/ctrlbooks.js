/* GET 'Books List' page */
const list = (req, res) => {
  res.render('blist', { title: 'Books List' });
};

const details = (req, res) => {
  res.render('bdetails', { title: 'Book details' });
};

module.exports = {
  list,
  details,
};
