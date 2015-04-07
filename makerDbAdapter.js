
var monk = require('monk');
var db = monk('localhost:27017/makermadness');
var COLL_NAME = "MakerSignups";


var MakerDbAdapter = function MakerDbAdapter( db )
{
	console.log("Diag 5050; db:" ) 
	//console.log(db);
	this.db = db;
}

MakerDbAdapter.prototype.doThis = function() {

	console.log("doThis()");
}

//MakerDbAdapter.prototype.insertMakerSignupRec = function(rec) {
MakerDbAdapter.prototype.insertMakerSignupRec = function(rec, callback) {

	console.log("============ Diag 3000; insertRec");

	var collection = this.db.get( COLL_NAME );
	console.log(collection);
	if( collection ) {
		console.log("Got it");
		console.log("============ Diag 3001; insertRec");
	} else {
		console.log("Problem");
		console.log("============ Err  3002; insertRec");
	}
	collection.insert( 
		rec, 
		{ w:1 },
		function( err, rec ) {
			if( err ) {
				console.log("Problem with insert:" + err );
				callback();	
			} else {
				console.log("Successful insert of: " + rec);					
				callback();	
			}
		}
	);
}

MakerDbAdapter.prototype.doThat = function() {

	console.log("doThat()");
}

module.exports = MakerDbAdapter;
