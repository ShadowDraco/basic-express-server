'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');

const request = supertest(app);

/* TESTS
    404 on a bad route
    404 on a bad method
    500 if no name in the query string
    200 if the name is in the query string
    given an name in the query string, the output object is correct
*/
describe('Server', () => {
	it('handles bad routes', async () => {
		const response = await request.get('/foo');

		expect(response.status).toBe(404);
		expect(response.body.message).toBe('That page does not exist sorry.');
	});

	it('handles bad methods', async () => {
		let response = await request.put('/foo');

		expect(response.status).toBe(404);
		expect(response.body.message).toBe('That page does not exist sorry.');

		response = await request.post('/foo');

		expect(response.status).toBe(404);
		expect(response.body.message).toBe('That page does not exist sorry.');
	});

	it('handles no name in query', async () => {
		const response = await request.get('/person/');

		expect(response.status).toBe(500);
		expect(response.body.message).toBe('No name was given for the person.');
	});

	it('handles good person requests', async () => {
		const response = await request.get('/person/?name=bob');
		
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ name: 'bob' });
	});
});
