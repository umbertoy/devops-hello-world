// Based on http://expressjs.com/en/starter/hello-world.html
// https://creativecommons.org/licenses/by-sa/3.0/us/
//
// Extended to support configurable port and message.

const express = require('express')
var cors = require('cors'); 
var bodyParser = require('body-parser');

const app = express()
const config = require('./config.json')
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send({ 'message' : (config.message||'Hello World!')}  )
})

app.listen(config.port, function () {
  console.log('listening on port ' + String(config.port||3000))
})
