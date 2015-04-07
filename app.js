//----------------------------------------------------------
// AchieveMakerMadness
// lboyer; 3/2015
//----------------------------------------------------------

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var Db = require('mongodb').Db;
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var MONGO_HOST = "localhost";
var MONGO_PORT = 27017;
var MONGO_DB = "makermadness";
var CONN_STR = "mongodb://" + MONGO_HOST + ":" + MONGO_PORT + "/" + MONGO_DB;

var dbConn = undefined;

function getDbConn() {
	if( dbConn ) {
		return dbConn;
	} else {
		MongoClient.connect( CONN_STR, function(err, db) {
			if(err) {
				console.log("Err  8799; Cannot connect to db.");
				console.log("Conn str:" + CONN_STR);
			} else {
				// Set global connection var.
				dbConn = db;
				console.log("Diag 1001; Got DB Connection");
			}
		});
	}
}

// Preload the db conn.
console.log("Diag 1000; getting DB Connection...");
getDbConn();

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
	// Send the database client along with the request obj.
	console.log("Diag 2000; loading db creds");
	req.db = dbConn;
	next();
});


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});


// error handlers

// development error handler
// will print stacktrace
console.log("Env:" + app.get('env'));

if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

/*
function addPotentialMaker( maker_form_data ) {

	var collection = db.get('potential_makers');
	collection.insert({
		"potential_maker": roleName
	}, function(err, doc) {
		if( err ) {
			console.log("Diag 1000; successfully inserted:" + doc);
		}
	}); 
}
*/

module.exports = app;
