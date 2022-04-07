const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/mean-books';
//mongoose.connect(dbURI, { useNewUrlParser: true });
const connect = () => {
  setTimeout(
    () =>
      mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    1000
  );
};

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const appShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.once('SIGUSR2', () => {
  appShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', () => {
  appShutdown('app termination', () => {
    process.exit(0);
  });
});
//process.on('SIGTERM', () => {
//  appShutdown('Heroku app shutdown', () => {
//    process.exit(0);
//  });
//});

connect();

require('./books');
