'use strict';

const logger = require('.');

describe('Logger', () => {
	it('calls next with no arguments', () => {
		const req = {};
		const res = {};
		const next = jest.fn();

		logger(req, res, next);
		expect(next).toHaveBeenCalledWith();
	});
});
