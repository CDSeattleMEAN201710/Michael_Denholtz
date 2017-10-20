const mongoose = require('mongoose')
const Question = mongoose.model('Question')
const Game = mongoose.model('Game')

module.exports = {
    addQuestion: (req, res) => {
        temp = new Question(req.body)
        temp.save()
            .then(() => res.json(true))
            .catch(err=>{
                res.status(500)
                res.json(err)
            })
    },
    getQuestions: (req,res) => {
        Question.find({})
            .then(results => {res.json(results)})
            .catch(err =>{
                res.status(500)
                res.json(err)
            })
    },
    checkSession: (req,res) => {
        if(req.session.name){            
            res.json(req.session.name)
        } else {
            res.status(500)
            res.json(false)
        }
    },
    setName: (req,res) => {
        req.session.name=req.body.name
        res.json(true)
    },
    grade: (req,res) => {
        let tempobj = {name:req.session.name,score:req.body.score}
        let temp = new Game(tempobj)
        temp.save()
            .then(()=>res.json(true))
            .catch(err=>{
                res.status(500)
                res.json(false)
            })
    },
    getGames: (req,res) => {
        console.log('getgames')
        Game.find()
            .then(results => {
                console.log(results)
                res.json(results)
            })
            .catch(err => {
                res.status(500)
                res.json(false)
            })
    },
    logout: (req,res) =>{
        req.session.destroy()
        res.redirect('/')
    }

}
