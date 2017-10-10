const express = require('express')
const app = express()

const session = require('express-session')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs')

app.use(session({secret:'dojo'})) 

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    timestamp: String
   })
   mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
   var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'

app.listen(8000,function(){
    console.log('Listening on port 8000.')
})

app.get('/',function(req,res){
    res.render('home')
})

app.post('/quotes',function(req,res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote,timestamp: Date()});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    quote.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
            res.redirect('/');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/quotes');
        }
    })
})

app.get('/quotes',function(req,res){
    Quote.find({}).sort('timestamp').exec(function(err,quotes){
        console.log(quotes)
        let context = {quotes:quotes}
        res.render('quotes',context)
    })
    
})

// Room.find({}).sort('-date').exec(function(err, docs) { ... });