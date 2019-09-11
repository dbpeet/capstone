const db = require('../models');

const show = (req, res) => {
    db.Work.findById(req.params.id).populate('genres artist')
    .exec((err, foundWork) => {
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

        db.User.findById(
            req.body.artist, ((error, foundUser)=>{
                foundUser.works.push(createdWork._id);
                foundUser.work_genres.push(req.body.genre);
                foundUser.save();
            }
        ));
        // db.Genre.findById(
        //     req.body.genre, ((error, foundGenre)=>{
        //         foundGenre.works.push(createdWork._id);
        //         foundGenre.artists.push(req.body.artist);foundGenre.save();
        //     }
        // ));

        res.status(200).json({ status: 200, data: createdWork });
    });
    
};
const deleteOne = (req, res) => {
    db.Work.findByIdAndDelete(req.params.id, (err, deletedWork) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

        db.User.findById(
            deletedWork.artist, ((error, foundUser)=>{
                foundUser.works.remove(deletedWork._id);
                foundUser.save();

            }
        ));
    
        res.status(200).json({ status: 200, data: deletedWork });
    });
};
const deleteAll = (req, res) => {
    db.Work.deleteMany({}, (err, deletedWorks) => {  
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });
        res.status(200).json({ status: 200, data: deletedWorks });
    });
};

const edit = (req, res) => {
    console.log(req.params.id)
    db.Work.findByIdAndUpdate(req.params.id, req.body,{ new: true }, (err, updatedWork) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again', });
        res.status(200).json({ status: 200, data: updatedWork, });
    });
};

module.exports = {
  show,
  index,
  create,
  deleteOne,
  deleteAll,
  edit,
};
