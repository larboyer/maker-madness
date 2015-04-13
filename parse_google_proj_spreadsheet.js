var Spreadsheet = require('edit-google-spreadsheet');
var fs = require('fs');

Spreadsheet.load({
    debug: true,
    spreadsheetId: '1yk2WoulEZBeMWma3hG4rjmghjdZOI8yrba7ZVB1s8pc',
    worksheetName: 'Committed Maker Stations',
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
				console.dir(rows);
				console.dir(info);
				write_proj_data_file(rows, info);
			}
		});
	}
function write_proj_data_file(rows, info) {

	var out_obj = {}
	out_obj['row_data'] = rows;
	out_obj['sheet_info'] = rows;
	// Boyer here

	fs.writeFile("spreadsheet_ata.json", k	

}


