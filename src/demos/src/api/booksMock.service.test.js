/****************************************************************
*                      *::SERVICE|DUMMY::*                      *
****************************************************************/
import { BookService } from './books.service'

describe('Test for BookService', () => {
	let service
	beforeEach(() => {
		service = new BookService()
	})

	/****************************************************************
	*                        !::UNIT|TEST::!                        *
	****************************************************************/
	describe('', () => {
		test('test for getBooks', ()=> {
			/* ------------- * <AAA>- Mantra -<AAA> * ------------ */
			// Arrange -> Act ->
			let books = service.getAll()
			// Assert ->
			expect(books.length).toEqual(2)
		})
	})
})
