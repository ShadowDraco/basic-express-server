'use strict';

module.exports = (error, req, res, next) => {
	const errorMessage = typeof error === 'string' ? error : error.message;
	res.status(500).json({
		error: 500,
		route: req.baseUrl,
		message: errorMessage,
	});
};
