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

