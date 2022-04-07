const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },

  authors: [authorSchema],
});

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviewText: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

bookSchema.index({ title: '2dsphere' });

mongoose.model('Book', bookSchema);
