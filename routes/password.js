/**
 * Created by xieruiluo on 16/3/1.
 */
var express = require('express'),
	router = express.Router();

router.get('/', function(req, res, next) {
	res.render('password');
});

module.exports = router;