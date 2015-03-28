var express = require('express');
var router = express.Router();

//var monk = require('monk');
//var db = monk('localhost:27017/makermadness');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('intro', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/home', function(req, res, next) {
	res.render('home', { 
		title: 'Achieve Maker Madness' 
	});
});

router.get('/makers_wanted', function(req, res, next) {
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
