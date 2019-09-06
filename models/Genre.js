const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
      type: String,
      required: true,
  },
  works: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Work',
    }
  ],
  artists: [
    {
    type: Schema.Types.ObjectId,
    ref: 'User',
    }
  ],
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;