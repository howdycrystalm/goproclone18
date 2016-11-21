var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config.js');
var session = require('express-session')
var app = module.exports = express();

var port = 3000;

var connectionString = config.MASSIVE_URI //don't forget to name your database jaybird!
var db = massive.connectSync({
    connectionString: connectionString
});
app.set('db', db);
var db = app.get('db');
app.use(bodyParser.json());
app.use(express.static('../dist'));
app.use(cors());




app.listen(port, function() {
    console.log('nailed it on port ' + port);
})
