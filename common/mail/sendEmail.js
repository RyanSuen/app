/**
 * Created by xieruiluo on 16/3/10.
 */

var nodemailer = require('nodemailer'),
	smtpTransport = require('nodemailer-smtp-transport');

module.exports = function( from, to, subject, html ) {
	var options = {
			host: "smtp.qq.com",
			secureConnection: true,
			secure: true,
			port: 465,
			auth: {
				user: "1454416761@qq.com",
				pass: "sunyi469185636"
			}
		},
		mail = nodemailer.createTransport(smtpTransport(options));
	mail.sendMail({
		from: from,    //'sunyi<1454416761@qq.com>',
		to: to,    //'4...6@qq.com,15...78@qq.com',
		subject: subject,    //'老佛爷，node发邮件测试！',
		//text: '老佛爷，node发邮件测试！'
		html: html    //'<h1>嗨！老佛爷！</h1><h2>多人接收测试！</h2>'
	}, function(err,response) {
		if(err) {
			console.log('send mail error! message: ' + err);
		} else {
			console.log('send mail success!', response);
		}
		mail.close();
	});
};