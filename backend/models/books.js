const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  ratings: [
    {
      userId: { type: String, required: true },
      grade: { type: Number, required: true },
    },
  ],
  averageRating: { type: Number, required: true },
});

bookSchema.pre('save', function (next) {
  const fieldsToFormat = ['title', 'author', 'genre'];
  fieldsToFormat.forEach((field) => {
    if (this[field] && typeof this[field] === 'string') {
      this[field] = this[field].replace(/[<>!=@]/g, ' ');
    }
  });
  next();
});

module.exports = mongoose.model('Book', bookSchema);
