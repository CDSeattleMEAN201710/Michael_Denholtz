const note = require('./../controllers/note')

module.exports = app =>{
    app.post('/create',note.create)
    app.get('/index',note.index)
}