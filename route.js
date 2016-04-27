/**
 * Created by xieruiluo on 16/3/9.
 */

var route = function( app ) {

	//page routes
	var index = require( './routes/index' ),
		users = require( './routes/users' ),
		login = require( './routes/login'),
		password = require( './routes/password' );

	app.use( '/', index );
	app.use( '/users', users );
	app.use( '/login', login );
	app.use( '/password', password );

	//api routes
	var loginApi = require( './routes/api/login' ),
		findPassword = require( './routes/api/password' );

	app.use('/api/login', loginApi);
	app.use('/api/password', findPassword);
};

module.exports = route;