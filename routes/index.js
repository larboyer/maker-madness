//----------------------------------------------------------
// AchieveMakerMadness
// lboyer; 3/2015
//----------------------------------------------------------
var express = require('express');
var router = express.Router();

var fs = require('fs');
var PROJ_SPREADSHEET_DATA_NAME = "spreadsheet_data.json";

var proj_data_obj = JSON.parse(fs.readFileSync(PROJ_SPREADSHEET_DATA_NAME, 'utf8'));
console.log("data:" + proj_data_obj.row_data[2][2]);

var userStates = [
	{state_id:"new", longname:"New"},
	{state_id:"contacted", longname:"Contacted"},
	{state_id:"contacted-twice", longname:"Contacted Twice"},
	{state_id:"honing-ideas", longname:"Honing Ideas"},
	{state_id:"ready-for-faire", longname:"Ready for Faire"},
	{state_id:"not-interested-afterall", longname:"Not Interested After All"}
];

var masterCodeMap = {
	'userStatesMap':userStates
};

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('intro', { 
		'title': 'Achieve Maker Madness'
	});
});

router.get('/intro', function(req, res, next) {
	res.render('intro', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/home', function(req, res, next) {
	res.render('home', { 
		title: 'Achieve Maker Madness',
		'projDataObj': proj_data_obj
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
	var ins_obj = req.body;
	// Just want to add a few fields
	ins_obj['status'] = 'new';
	ins_obj['type'] = 'maker';

	insertRec( db_conn, ins_obj, function(ret_obj) {
		res.send(JSON.stringify(ret_obj));
	});
});

router.post('/sponsor_signup', function(req, res, next) {
	console.log("Diag 6010; got sponsor_signup post");

	var db_conn = req.db;
	var ins_obj = req.body;
	// Just want to add a few fields
	ins_obj['status'] = 'new';
	ins_obj['type'] = 'sponsor';

	insertRec( db_conn, ins_obj, function(ret_obj) {
		res.send(JSON.stringify(ret_obj));
	});
});

router.post('/volunteer_signup', function(req, res, next) {
	console.log("Diag 6020; got volunteer_signup post");

	var db_conn = req.db;
	var ins_obj = req.body;
	// Just want to add a few fields
	ins_obj['status'] = 'new';
	ins_obj['type'] = 'volunteer';

	insertRec( db_conn, ins_obj, function(ret_obj) {
		res.send(JSON.stringify(ret_obj));
	});
});

// Boyer here
router.get('/maker_master', function(req, res, next) {

	var db_conn = req.db;
	if( !db_conn ) {
		console.log("Err  8786; can't get valid DB conn");
		res.render('error', { 
	  		message: "Couldn't get a database connection",
  			error: {status:"Error 8786", stack:""}
		});
	}

	var collection = db_conn.collection( DB_MAKER_COLL );
	if( !collection ) {
		console.log("Err  8787; can't get valid DB conn");
		res.render('error', { 
	  		message: "Couldn't get the maker madness collection",
  			error: {status:"Error 8787", stack:""}
		});
	} else {
		collection.find( {}, {sort:{_id:1}}).toArray( function( err, docs ) {
			if( err ) {
				console.log("Err  8788; can't get valid DB conn");
				res.render('error', { 
			  		message: "Problem with query:" + err,
		  			error: {status:"Error 8788", stack:""}
				});
			} else {
				res.render('maker_master', { 
					'makerArray': docs,
					'masterCodeMap': masterCodeMap
				});
			}
		});
	}
});


// Returns a result obj with a .result field which is either success or failure. 
// If failure, there is a failure message. 
// If success, result is in .data
function insertRec( db_conn, rec, callback ) {

	var ret_obj = {};
	if( !db_conn ) {
		console.log("Houston, we have a problem");
		ret_obj.result = 'failure';
		ret_obj.message = 'Err  8374; Do not have a valid DB connection';
		callback(ret_obj);
	}

	var collection = db_conn.collection( DB_MAKER_COLL );
	if( !collection ) {
		console.log("Houston, we have still another problem");
		ret_obj.result = 'failure';
		ret_obj.message = 'Err  8373; could not find the collection';
		callback(ret_obj);
	} else {
		collection.insert( rec, {w:1}, function(err, ret_rec) {
			if( err ) {
				ret_obj.result = 'failure';
				ret_obj.message = 'Err  8373; could not find the collection';
				callback(ret_obj);
			} else {
				console.log("Success:");
				ret_obj.result = 'success';
				ret_obj.data = ret_rec;
				callback(ret_obj);
			}
		});
	}
}

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

router.get('/font_test', function(req, res, next) {
	res.render('font_test', { 
	});
});

router.get('/docs_test', function(req, res, next) {
	res.render('docs_test', { 
		'projDataObj': proj_data_obj
	});
});

/*
router.get('/docs_test', function(req, res, next) {
	res.render('docs_test', { 
	});
});
*/
/*
router.post('makers_signup', function(req, res, next) {
	console.log("Diag 1000; makers_signup");

	//res.render('makers_to_contact', { 
	//	title: 'Achieve Maker Madness' 
	//});
});
*/

module.exports = router;
