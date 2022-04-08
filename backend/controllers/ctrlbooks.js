/* GET 'Books List' page */

const list = (req, res) => {
  res.render('blist', {
    title: 'Books List!..',
    pageHeader: { title: 'mean books', strapLine: 'select book to add review' },
    books: [
      {
        title: 'Moby Dick',
        rate: 3,
        author: 'Herman Melville',
      },
      {
        title: 'A Tale of Two Cities',
        rate: 3,
        author: 'Charles Dickens',
      },
      {
        title: 'War and Peace',
        rate: 3,
        author: 'Leo Tolstoy',
      },
      {
        title: 'Jane Eyre',
        rate: 3,
        author: 'Charlotte Brontë',
      },
      {
        title: 'Ulysses',
        rate: 3,
        author: 'James Joyce',
      },
    ],
  });
};

const details = (req, res) => {
  const bookName = req.params.bookname;
  console.log('book name ' + bookName);
  res.render('bdetails', {
    title: 'Book details',
    bookname: bookName,
    books: [
      {
        title: 'Moby Dick',
        rate: 3,
        author: 'Herman Melville',
        live: '1819-1891',
        language: 'en',
        subjects: [
          'Whaling',
          'Sea stories',
          'Psychological fiction',
          'Ship captains',
        ],
      },
      {
        title: 'A Tale of Two Cities',
        rate: 3,
        author: 'Charles Dickens',
        live: '1819-1891',
        language: 'en',
        subjects: [
          'Historical fiction',
          'France',
          'London (England)',
          'War stories',
        ],
      },
      {
        title: 'War and Peace',
        rate: 3,
        author: 'Leo Tolstoy',
        live: '1828-1910',
        language: 'en',
        subjects: [
          'Historical fiction',
          'War stories',
          'Napoleonic Wars',
          'Russia',
          'Aristocracy (Social class)',
        ],
      },
      {
        title: 'Jane Eyre',
        rate: 3,
        author: 'Charlotte Brontë',
        live: '1816-1855',
        language: 'en',
        subjects: [
          'England',
          'Young women',
          'Love stories',
          'Governesses',
          'Fathers and daughters',
          'Mentally ill women',
          'Charity-schools',
        ],
      },
      {
        title: 'Ulysses',
        rate: 3,
        author: 'James Joyce',
        live: '1882-1941',
        language: 'en',
        subjects: [
          'City and town life',
          'Psychological fiction',
          'Domestic fiction',
          'Married people',
          'Male friendship',
          'Dublin (Ireland)',
          'Epic literature',
        ],
      },
    ],
  });
};

module.exports = {
  list,
  details,
};
