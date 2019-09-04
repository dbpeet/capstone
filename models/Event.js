const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
      type: String,
      required: true,
  },
  img_link: {
      type: String,
  },
  date_posted: {
    type: Date,
    default: Date.now,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
  artist: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  audience: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
    ],
  genres: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Genre',
    }
    ],

});

const Event = mongoose.model('Event', postSchema);

module.exports = Event;