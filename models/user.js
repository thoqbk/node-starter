var Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
    username: {type: String, default: null},
    email: {type: String, unique: true, sparse: true, require: true, trim: true},
    displayName: {type: String, required: true},
    password: {type: String, default: null},
}, {
    timestamps: true
});

module.exports = Mongoose.model('User', UserSchema);