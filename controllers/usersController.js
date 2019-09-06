const db = require('../models');

const show = (req, res) => {
  db.User.findById(req.params.id, { password: 0, __v: 0, _id: 0 }, (err, foundUser) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    res.status(200).json({ status: 200, data: foundUser });
  });
};

module.exports = {
  show,
};
