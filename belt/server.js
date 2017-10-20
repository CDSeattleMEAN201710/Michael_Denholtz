const express = require('express')
const app = express()

const path = require('path')

const session = require('express-session')
app.use(session({secret:'dojobelt'}))

const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'./client/dist')))

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000,function(){
 console.log('Listening on port 8000.')
})