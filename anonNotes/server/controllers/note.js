const mongoose = require('mongoose')
const Note = mongoose.model('Note')

module.exports = {
    index: (req, res) => {
        Note.find()
            .then(notes => res.json(notes))
            .catch(err => {
                console.log('car find error', err)
                res.status(500).json(err)
            })
    },
    create : (req,res) => {
        let newNote = new Note(req.body)
        newNote.save()
    }

}
