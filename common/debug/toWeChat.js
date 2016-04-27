/**
 * Created by xieruiluo on 16/2/15.
 */
module.exports = function(text, desp) {

	var fetch = require('isomorphic-fetch'),
		msg = text + ' ' + new Date().toLocaleString(),
		url = 'http://sc.ftqq.com/SCU956Tfb148d02bc12177493bd9c1c586892c256bfee784d228.send' +
			'?text=' + msg +
			'&desp=' + desp;

	fetch( url );

};