/**
 * Created by xieruiluo on 16/2/15.
 */
var Q = require('q'),
	config = require('../../config/config.js');

var query = function( sql ) {

	return Q.Promise(function(resolve, reject, notify) {

		var mysql = require('mysql'),
			connection = mysql.createConnection(config.db.local),
			toWeChat = require('../debug/toWeChat.js');

		connection.connect();

		connection.query(sql, function(err, row, fields) {
			if (err) {
				reject( err );
				toWeChat('operate_db_error', [new Date().toLocaleString(), sql, JSON.stringify(err)].join('||'));
			}
			resolve(row);
		});

		connection.end();
	});

};

module.exports = query;