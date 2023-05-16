'use strict';

module.exports = (req, res, next) => {
	!req.query.name ? next('No name was given for the person.') : next();
};
