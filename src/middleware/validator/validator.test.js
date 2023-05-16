'use strict';

// unit test for validator middleware
const validator = require('.');

describe('Validator', () => {
	//create a mock req, res, and next
	let req = { query: { name: 'bob' } };
	let res = {};
	let next = jest.fn();

	test('passes as expected', () => {
		validator(req, res, next);
		expect(next).toHaveBeenCalledWith();
	});

	test('Errors when expected', () => {
		req = { query: {} };
		validator(req, res, next);
		expect(next).toHaveBeenCalledWith('No name was given for the person.');
	});
});
