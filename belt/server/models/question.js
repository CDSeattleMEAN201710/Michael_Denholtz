const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    question: {type: String, required: true, minlength: 15},
    answer: {type: String, required: true},
    fake1: {type: String, required: true},
    fake2: {type: String, required: true},
    })

mongoose.model('Question',QuestionSchema)