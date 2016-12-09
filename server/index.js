var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config.js');
var session = require('express-session')
var app = module.exports = express();
var stripeKey = require('./stripeSecretKeys');
var stripe = require('stripe')(stripeKey.secretKey);
var port = 3000;

var connectionString = config.MASSIVE_URI;
var db = massive.connectSync({
    connectionString: connectionString
});
app.set('db', db);
var db = app.get('db');
app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist'));
app.use(cors());

var UserCtrl = require('./controllers/UserCtrl');
var cartCtrl = require('./controllers/cartCtrl');
var apparelVCtrl = require('./controllers/apparelVCtrl');
var productCtrl = require('./controllers/productCtrl');
var passport = require('./services/passport');

var isAuthed = function(req, res, next) {
    if (!req.isAuthenticated()) return res.status(401)
        .send();
    return next();
}

app.use(session({
    secret: config.SESSION_SECRET,
    saveUnitialized: false,
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

//passport endpoints
app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/me'
}));

app.get('/api/logout', function(req, res, next) {
    req.logout();
    return res.status(200)
        .send('logged out');
});

//User endpoints
app.post('/api/register', UserCtrl.register);
app.post('/api/user', UserCtrl.read);
app.get('/api/me', isAuthed, UserCtrl.me);
app.put('/api/user/current', isAuthed, UserCtrl.update);
app.get('/api/getItem/:id', cartCtrl.getItem);
app.get('/api/getItems', apparelVCtrl.getItems);
app.get('/api/getProduct/:id', productCtrl.getProduct);
app.get('/api/getThumbs/:id/:gender', productCtrl.getThumbs);


//stripe - payment
app.post('/api/payment', cartCtrl.processPayment);


app.listen(port, function() {
    console.log('nailed it on port ' + port);
})
