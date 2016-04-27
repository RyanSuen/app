var express = require('express');
var router = express.Router();
var query = require('../common/db/query.js');

router.get('/', function (req, res, next) {

	query('select * from crystal_user')
		.then(function (data) {

			res.render('index', {
				title: 'Express',
				data: JSON.stringify(data)
			});

		});

});

module.exports = router;
