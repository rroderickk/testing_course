import { BookService } from './books.service'
import { fakeBooks } from './fakeBooks'

/****************************************************************
*                      *::SERVICE|DUMMY::*                      *
****************************************************************/
describe('Test for MOCK of BookService', () => {


	//::FAKE|SERVICE::
	const MongoLibStub = {
		getAll: () => {},
		create: () => {}
	}

	//::SUPLANTACION::
	console.log('[DUMMI]: ', MongoLibStub)
	jest.mock('./db.js', () => {
		jest.fn().mockImplementation(() => MongoLibStub)
		jest.clearAllMocks()
	})

	jest.mock('./db.js', () => jest.fn().mockImplementation(() => ({
		getAll: jest.fn(),
		create: () => {},
	})))
	/****************************************************************
	*                        !::UNIT|TEST::!                        *
	****************************************************************/
	describe('./db.js', () => {
		let service
		beforeEach(() => {
			service = new BookService()
		})

		test('test for getBooks', async () => {
			/*-------------<AAA>-<AAA>------------*/
			// Arrange ->
			jest.fn().mockResolvedValue(fakeBooks)
			/**
			 * console.log('🚀', spyGetAll.mockResolvedValue(fakeBooks))
			 * [Function: mockConstructor] {
       * _isMockFunction: true,
       * getMockImplementation: [Function (anonymous)],
       * mock: [Getter/Setter],
       * mockClear: [Function (anonymous)],
       * mockReset: [Function (anonymous)],
       * mockRestore: [Function (anonymous)],
       * mockReturnValueOnce: [Function (anonymous)],
       * mockResolvedValueOnce: [Function (anonymous)],
       * mockRejectedValueOnce: [Function (anonymous)],
       * mockReturnValue: [Function (anonymous)],
       * mockResolvedValue: [Function (anonymous)],
       * mockRejectedValue: [Function (anonymous)],
       * mockImplementationOnce: [Function (anonymous)],
       * mockImplementation: [Function (anonymous)],
       * mockReturnThis: [Function (anonymous)],
       * mockName: [Function (anonymous)],
       * getMockName: [Function (anonymous)]
			 */
			// Act ->
			let books = await service.getAll()
			// Assert ->
			expect(books.length).toEqual(2)
			// expect(jest.fn()).toHaveBeenCalled()
			// expect(spyGetAll).toHaveBeenCalledTimes(1)
			// expect(spyGetAll).toHaveBeenCalledWith('books', {})
			console.log(books)
		})
	})
})
