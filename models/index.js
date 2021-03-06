const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/art-works';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('MongoDB connected successfully...!'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  User: require('./User'),
  Genre: require('./Genre'),
  Event: require('./Event'),
  Work: require('./Work'),
};
