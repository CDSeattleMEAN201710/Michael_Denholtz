const controller = require('./../controllers/controller')
const path = require('path')

module.exports = app =>{
    app.get('/getquestions',controller.getQuestions)
    app.post('/addquestion',controller.addQuestion)
    app.get('/checksession',controller.checkSession)
    app.get('/getgames',controller.getGames)
    app.get('/logout',controller.logout)
    app.post('/grade',controller.grade)
    app.post('/setname',controller.setName)
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
})
}