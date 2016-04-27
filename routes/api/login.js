/**
 * Created by xieruiluo on 16/3/1.
 */
var express = require( 'express' ),
	router = express.Router(),
	error = require( '../../config/status.js' ),
	query = require( '../../common/db/query.js' );

router.post( '/', function( req, res, next ) {
	var email = req.body.email,
		pwd = req.body.password,
		sql = 'select password from crystal_user where email = "' +
			email + '" limit 1';

	query( sql )
		.then( function( data ) {

			if( !data[0] ) {
				req.session.user = null;
				res.json( error.USER_ACCOUNT_ERROR() );
			}

			if( pwd !== data[0].password ) {
				req.session.user = null;
				res.json( error.USER_PWD_ERROR() );
			}

			if( pwd === data[0].password ) {
				req.session.user = email;
				res.json( {
					status: 200
				} );
			}

		}).catch( function(err) {
			req.session.user = null;
			res.json( err );
		} );
});

module.exports = router;