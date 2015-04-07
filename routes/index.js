//----------------------------------------------------------
// AchieveMakerMadness
// lboyer; 3/2015
//----------------------------------------------------------
var express = require('express');
var router = express.Router();
/*
var Db = require('mongodb').Db;
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var MONGO_HOST = "localhost";
var MONGO_PORT = 27017;
var MONGO_DB = "test1";
var CONN_STR = "mongodb://" + MONGO_HOST + ":" + MONGO_PORT + "/" + MONGO_DB;
*/

//var monk = require('monk');
//var db = monk('localhost:27017/makermadness');
var MakerDbAdapter = require('../makerDbAdapter.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('intro', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/intro', function(req, res, next) {
	res.render('intro', { 
		title: 'Achieve Maker Madness' 
	});
});
router.get('/index4', function(req, res, next) {
	res.render('index4', { 
		title: 'Achieve Maker Madness' 
	});
});
router.get('/index5', function(req, res, next) {
	res.render('index5', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/home', function(req, res, next) {
	res.render('home', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/makers', function(req, res, next) {
	res.render('makers', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/sponsors', function(req, res, next) {
	res.render('sponsors', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/volunteers', function(req, res, next) {
	res.render('volunteers', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/maker_signup', function(req, res, next) {
	res.render('maker_signup', { 
		title: 'Achieve Maker Madness' 
	});
});
var DB_MAKER_COLL = "makers";

router.post('/maker_signup', function(req, res, next) {
	console.log("Diag 6000; got maker_signup post");

	var db_conn = req.db;
	if( !db_conn ) {
		console.log("Houston, we have a problem");
	}

	// I'm guessing this is already objectified by Express. 
	console.log("=========");
	console.log(req.body);
	console.log("=========");

	//var maker_db = new MakerDbAdapter( req.db );
	//maker_db.insertMakerSignupRec( rec );

	var collection = db_conn.collection( DB_MAKER_COLL );
	if( !collection ) {
		console.log("Houston, we have still another problem");
		var ret_obj = {};
		ret_obj.result = 'failure';
		ret_obj.message = 'Err  8373; could not find the collection';
		ret_obj.data = JSON.stringify(rec);
		res.send(ret_obj_str);
	} else {
		collection.insert( req.body, {w:1}, function(err, rec) {
			if( err ) {
				console.log("Insert failed:" + err);
			} else {
				console.log("Success:");
				console.log(rec);
	
				var ret_obj = {};
				ret_obj.result = 'success';
				//ret_obj.data = JSON.stringify(rec);
				//res.send(ret_obj);
				ret_obj.data = rec;
				res.send(JSON.stringify(ret_obj));
			}
		});
	}

});

router.get('/sponsor_signup', function(req, res, next) {
	res.render('sponsor_signup', { 
		title: 'Achieve Maker Madness' 
	});
});

router.post('/test01', function(req, res, next) {
	res.render('maker_signup', { 
		title: 'Achieve Maker Madness' 
	});
});


router.get('/volunteer_signup', function(req, res, next) {
	res.render('volunteer_signup', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/makers_to_contact', function(req, res, next) {
	res.render('makers_to_contact', { 
		title: 'Achieve Maker Madness' 
	});
});
/*
router.post('makers_signup', function(req, res, next) {
	console.log("Diag 1000; makers_signup");

	//res.render('makers_to_contact', { 
	//	title: 'Achieve Maker Madness' 
	//});
});
*/

module.exports = router;
