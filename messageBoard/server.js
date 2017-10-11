
const express = require('express')
const app = express()

require('./server/config/routes.js')(app)

const session = require('express-session')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/messageBoard');
const Schema = mongoose.Schema
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true,minlength:4 }, 
    message:{type:String,required:true,minlength:4},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }, { timestamps: true });
const CommentSchema = new mongoose.Schema({
    // since this is a reference to a different document, the _ is the naming convention!
    name: { type: String, required: true,minlength:4 },
    _post: {type: Schema.Types.ObjectId, ref: 'Message'},
    text: { type: String, required: true,minlength:4 },
    }, {timestamps: true });

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
const Message = mongoose.model('Message'); 
const Comment = mongoose.model('Comment');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs')

app.use(session({secret:'dojo'}))

app.listen(8000,function(){
    console.log('Listening on port 8000.')
})