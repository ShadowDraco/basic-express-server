'use strict';

module.exports = (req, res, next) => {
	console.log(req.method, ' to: ', req.url);
	next();
};
