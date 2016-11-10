var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/pairs';

// connect db
mongoose.connect(mongoURI);

//var db = require('./config/db');
var port = process.env.PORT || 1337;




// configuration ===========================================

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

// routes ==================================================
//require('./app/routes')(app);
app.get('/history', function (req, res) {
  res.send('Render all past pairs here')
})

app.listen(port);

console.log('Magic happens on port ' + port);


exports = module.exports = app;




