const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    signup_date: {
        type: Date,
        default: Date.now,
    },
    is_artist: {
        type: Boolean,
        default: false,
    },
    followed_artists: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        }
    ],
    followed_genres: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Genre',
        }
    ],
    work_genres: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Genre',
        }
    ],
    works: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Work',
        }
    ],
    links: {
        type: [ String ]
    },
    img_link: {
        type: String
    },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
