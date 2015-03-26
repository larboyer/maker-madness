var express = require('express');
var router = express.Router();

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


module.exports = router;
