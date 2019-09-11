const db = require('../models');

const index = (req, res) => {
  db.Genre.find({}, (err, foundGenres) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });
    db.Work.find({}, (err, foundWorks) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });
        db.User.find({}, (err, foundArtists) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });


    res.status(200).json({ status: 200, data: {"genres": foundGenres, "artists": foundArtists, "works": foundWorks} });
  });
})})};

module.exports = {
  index,
};