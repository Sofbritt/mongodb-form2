const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

const User = require('./models/User.js')

const user1 = new User({
    userName: 'Sofi',
    age: 20,
    mother: 'Venera',
    married: false,
    email: 'abckaxk13452com',
    password: 'Hello-world'
})

user1.save()
console.log(user1)


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {

    console.log('connection to mongodb');
})

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log('Server is listening');;
})