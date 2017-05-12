import Promise from 'bluebird';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Post',
        required: true
    },
    groups: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Group',
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now,
        required: true
    }
});

export default mongoose.model('User', userSchema);