const express = require('express')
const app = express()
const session = require('express-session')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views',__dirname + '/clients/views')
app.set('view engine', 'ejs')
app.use(session({secret:'dojo'}))

app.listen(8000,function(){
    console.log('Listening on port 8000.')
})

app.get('/',function(req,res){
    if(!req.session.result){
        req.session.result = false
    }
    if(!req.session.num){
        req.session.num = Math.floor(Math.random() * 100 + 1)
    }
    res.render('home',req.session)
})

app.post('/process',function(req,res){
    let guess = req.body.guess
    if(guess == req.session.num){
        req.session.result='Winner. Winner. Chicken. Dinner.'
    } else if(guess < req.session.num){
        req.session.result='Too low!'
    } else{
        req.session.result='Too high!'
    }
    res.redirect('/')
})

app.get('/refresh',function(req,res){
    req.session.num = false
    req.session.result = false
    res.redirect('/')
})