const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    age: {
        type:Number,
        min:10,
        max:40
    },
    mother: String,
    married: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('User', userSchema)