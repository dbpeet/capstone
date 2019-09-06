const db = require('../models');

const show = (req, res) => {
  db.User.findById(req.params.id, { password: 0, __v: 0, email: 0 }, (err, foundUser) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundUser });
  });
};

const index = (req, res) => {
  db.User.find({}, { password: 0, __v: 0, email: 0 }, (err, foundUsers) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundUsers });
  });
}

module.exports = {
  show,
  index,
};
