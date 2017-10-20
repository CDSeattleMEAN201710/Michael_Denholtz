const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    score: {type: Number, required: true, minlength: 4},
    })

mongoose.model('Game',GameSchema)