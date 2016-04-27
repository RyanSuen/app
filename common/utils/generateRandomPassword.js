/**
 * Created by xieruiluo on 16/3/12.
 */

module.exports = function ( length ) {
	var str = 'asdfghjklqwertyuiopzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890',
		strLength = str.length,
		password = '',
		random = function( max ) {
			return Math.floor( Math.random() * max );
		};

	if( 6 <= length && length <=20 ) {
		while( length > 0 ) {
			password += str[ random( strLength ) ];
			length --;
		}
		return password;
	}

	return null;
};