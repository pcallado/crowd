var Promise = require('bluebird');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
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

userSchema.statics = {
    get: function(_login) {
        return this.findOne({login: _login}).exec();
    }
};

export default mongoose.model('User', userSchema);