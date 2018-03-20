var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var flash        = require('express-flash');
var moment 		 = require('moment');
var expressLayouts   = require('express-ejs-layouts');
var express          = require('express');
var app              = express();
var port             = process.env.PORT || 3000;

// Config express
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.use(expressLayouts);

// Config dos Middlewares
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ 
	secret: 'taqueopa', 
	resave: true,
  	saveUninitialized: false}));
app.use(flash());

//Routes
app.use(require('./routes'));



app.listen(port, function () {
  console.log('Example app listening on http://localhost:%s/',port);
});