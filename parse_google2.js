var Spreadsheet = require('edit-google-spreadsheet');
var fs = require('fs');

var SPREADSHEET_NAME = "spreadsheet_data.json";


Spreadsheet.load({
    debug: true,
	spreadsheetId: '1kH4fh9Kjhw6TPPpixMmStJg866brcAWGC_2D57pDPRI',
    worksheetName: 'Stations 2016',
    oauth : {
		email: '678723699173-9d0tr84f5ghv90lqtp527ts383o093o5@developer.gserviceaccount.com',
		keyFile: 'keys/MakerMadnessProjectAccess.pem'
    }
}, function sheetReady(err, spreadsheet) {

    if (err) {
		console.log("Err  2827; problem accessing sheet:" + err);
    } else {
		spreadsheet.receive(function(err, rows, info) {
			if (err) {
				console.log("Err  2828; problem accessing sheet:" + err);
			} else {
				//console.dir(rows);
				//console.dir(info);
				console.log("Diag 1000; spreadsheet data read");
				write_proj_data_file(rows, info);
			}
		});
	}
});

function write_proj_data_file(rows, info) {

	var out_obj = {}
	out_obj['row_data'] = rows;
	out_obj['sheet_info'] = rows;
	// Boyer here

	fs.writeFile( SPREADSHEET_NAME, JSON.stringify(out_obj), function(err) {
		if(err) {
			console.log("Err  8373; problem writing file:" + err);
		} else {
			console.log("Diag 1001; spreadsheet data written to " + SPREADSHEET_NAME);
		}
	});	
}


