const db = require('../models');

const show = (req, res) => {
    db.Genre.findById(req.params.id).populate('works artists')
    .exec((err, foundGenre) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundGenre });
  });
};

const index = (req, res) => {
  db.Genre.find({}, (err, foundGenres) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundGenres });
  });
};

const create = (req, res) => {
    db.Genre.create(req.body, (error, createdGenre) => {
        if (error) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

        res.status(200).json({ status: 200, data: createdGenre });
    });
};

const edit = (req, res) => {
    db.Genre.findByIdAndUpdate(req.params.id, req.body,{ new: true }, (err, updatedGenre) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again', });
        res.status(200).json({ status: 200, data: updatedGenre, });
    });
};

module.exports = {
  show,
  index,
  create,
  edit,
};