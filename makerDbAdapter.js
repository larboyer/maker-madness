
var monk = require('monk');
var db = monk('localhost:27017/makermadness');
var COLL_NAME = "MakerSignups";


var MakerDbAdapter = function MakerDbAdapter( db )
{
	this.db = db;
}

MakerDbAdapter.prototype.doThis = function() {

	console.log("doThis()");
}

MakerDbAdapter.prototype.insertMakerSignupRec = function() {

	console.log("insertRec");

	var collection = this.db.get( COLL_NAME );
	console.log(collection);
	if( collection ) {
		console.log("Got it");
	} else {
		console.log("Problem");
	}
	collection.insert( 
		rec, 
		{ w:1 },
		function( err, rec ) {
			if( err ) {
				console.log("Problem with insert:" + err );
			} else {
				console.log("Successful insert of: " + rec);					
			}
		}
	);
}

module.exports = MakerDbAdapter;
