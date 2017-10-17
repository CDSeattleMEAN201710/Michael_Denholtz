const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
content: {type: String, required: true, minlength: 3},
}, {timestamps: true})

mongoose.model("Note",NoteSchema)