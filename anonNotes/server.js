const express = require('express')
const app = express()

const path = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.use(express.static(path.join(__dirname,'./client/dist')))

app.listen(8000,function(){
 console.log('Listening on port 8000.')
})