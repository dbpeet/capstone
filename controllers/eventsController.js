const db = require('../models');

const show = (req, res) => {
  db.Event.findById(req.params.id, (err, foundEvent) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundEvent });
  });
};

const index = (req, res) => {
  db.Event.find({}, (err, foundEvents) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundEvents });
  });
};

const create = (req, res) => {
    db.Event.create(req.body, (error, createdEvent) => {
        if (error) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

        res.status(200).json({ status: 200, data: createdEvent });
    });
};

module.exports = {
  show,
  index,
  create,
};