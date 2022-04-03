/* GET 'Books List' page */
const list = (req, res) => {
  res.render('index', { title: 'Books List' });
};

module.exports = {
  list,
};
