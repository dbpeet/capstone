const db = require('../models');

const show = (req, res) => {
  db.Work.findById(req.params.id, (err, foundWork) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundWork });
  });
};

const index = (req, res) => {
  db.Work.find({}, (err, foundWorks) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundWorks });
  });
};

const create = (req, res) => {
    db.Work.create(req.body, (error, createdWork) => {
        if (error) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

        res.status(200).json({ status: 200, data: createdWork });
    });
};

module.exports = {
  show,
  index,
  create,
};
