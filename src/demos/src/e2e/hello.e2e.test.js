// import { supertest } from 'supertest'
import { app } from './app'

describe('Test for Hello endPoint', () => {
	let server = app
	beforeAll(() => {
		server = app.listen(3001)
	})

	test('should ', () => {
		expect(server).toBe(undefined)
	})

	// afterAll(async () => {
	// 	await server.close()
	// })

	// describe('Test for [GET] /', () => {
	// test('should return hello', async () => {
	// await request('')
	// .get('/')
	// .expect(200)
	// .then(res => expect(res).toBe('hello world'))
	// })
	// })
})
