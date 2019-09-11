const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
      type: String,
      required: true,
  },
  media_type: {
      type: String,
      required: true,
  },
  img_link: {
      type: String,
  },
  sound_link: {
      type: String,
  },
  video_id: {
      type: String,
  },
  date_posted: {
    type: Date,
    default: Date.now,
  },
  genre: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Genre',
    },
  artist: {
      type: Schema.Types.ObjectId,
      ref: 'User',
  },
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;