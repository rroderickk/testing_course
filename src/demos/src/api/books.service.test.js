import { BookService } from './books.service'
import { fakeBooks } from './fakeBooks'

/****************************************************************
*                      *::SERVICE|DUMMY::*                      *
****************************************************************/
describe('Test for MOCK of BookService', () => {
	//::FAKE|SERVICE::
	const MongoLibStub = {
		getAll: () => [...fakeBooks],
		create: () => {}
	}

	//::SUPLANTACION::
	console.log('[DUMMI]: ', MongoLibStub)
	jest.mock('./db.js', () => {
		jest.fn().mockImplementation(() => MongoLibStub)
	})

	/****************************************************************
	*                        !::UNIT|TEST::!                        *
	****************************************************************/
	describe('./db.js', () => {
		let service
		beforeEach(() => {
			service = new BookService()
		})

		test('test for getBooks', async () => {
			/*-------------<AAA>-<Mantra>-<AAA>------------*/
			// Arrange -> Act ->
			let books = await service.getAll()
			// Assert ->
			expect(books.length).toEqual(2)
			console.log(books)
		})
	})
})
