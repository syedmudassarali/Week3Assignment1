const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type:String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email'
    ]
        },
    active: {
        type: Boolean, 
        default: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    lastlogin: {
        type: Date,
        default: Date()
    }
});
UserSchema.index({email : 1}, {unique:true});

module.exports = mongoose.model('User', UserSchema);
