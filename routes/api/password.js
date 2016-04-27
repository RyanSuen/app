/**
 * Created by xieruiluo on 16/3/9.
 */

var express = require( 'express'),
	router = express.Router(),
	async = require( 'async' ),
	error = require( '../../config/status.js' ),
	query = require( '../../common/db/query.js'),
	generateRandomPassword = require( '../../common/utils/generateRandomPassword.js' ),
	sendEmail = require( '../../common/mail/sendEmail.js' );

router.post( '/', function( req, res, next ) {

	var email = req.body.email;

	async.waterfall( [

		function( callback ) {

			var sql = 'select email from crystal_user where email="' +  email+ '" limit 1';
			query( sql)
				.then(function( data ) {
					var value = data[0];
					if( !value ) {
						res.json(error.USER_ACCOUNT_ERROR());
					}
					if( value.email ) {
						callback( null, value.email );
					}
				})
				.catch(function( err ) {
					res.json( err );
				});
		},

		function( email, callback ) {

			var randomPassword = generateRandomPassword( 6 ),
				sql = 'update crystal_user set password="' + randomPassword + '" where email="' + email + '"';
			query( sql )
				.then(function( result ) {
					sendEmail(
						'1454416761@qq.com',
						'469185636@qq.com',
						'SYSTEM RESET PASSWORD',
						'<h3>The account <span style="color:#0073ca;">' + email + '</span> new password is:</h3>' +
						'<h3 style="color:#0073ca;">' + randomPassword + '</h3>'
					);
					callback(null, result );
				}).catch(function( err ) {
					res.json( err );
				});
		}

	], function( err, result ) {

		if( err ) res.json(err);
		res.json( result );

	});
} );

module.exports = router;