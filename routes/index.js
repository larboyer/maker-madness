var express = require('express');
var router = express.Router();

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
router.get('/sponsors', function(req, res, next) {
	res.render('makers_wanted', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/volunteers_wanted', function(req, res, next) {
	res.render('volunteers_wanted', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/maker_signup', function(req, res, next) {
	res.render('maker_signup', { 
		title: 'Achieve Maker Madness' 
	});
});

router.post('/maker_signup', function(req, res, next) {
	console.log("Diag 6000; got post");
	console.log(req.body);
	var ret_obj = {};
	ret_obj.result = 'success';
	ret_obj.data = req.body;
	ret_obj_str = JSON.stringify(ret_obj);	

	var maker_db = new MakerDbAdapter( req.db );
	maker_db.insertMakerSignupRec( rec );
	
	res.send(ret_obj_str);

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

router.post('makers_signup', function(req, res, next) {
	console.log("Diag 1000; makers_signup");

	/*
	res.render('makers_to_contact', { 
		title: 'Achieve Maker Madness' 
	});
	*/
});


module.exports = router;
