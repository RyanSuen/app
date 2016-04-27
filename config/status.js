/**
 * Created by xieruiluo on 16/3/8.
 */

module.exports = {

	USER_ACCOUNT_ERROR: function( code, msg ) {
		return {
			code: code || 10001,
			msg: msg || 'accout does not exist.'
		};
	},

	USER_PWD_ERROR: function( code, msg ) {
		return {
			code: code || 10002,
			msg: msg || 'incorrect password.'
		};
	}

};