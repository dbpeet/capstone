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
    audience: [
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
    followed_events: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        }
    ],
    hosted_events: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Event',
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
        type: String,
        default: "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png",
    },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
