/****************************************************
*                *::SERVICE|DUMMY::*                *
****************************************************/
import { BookService } from './books.service'

describe('Test for BookService', () => {
	let service
	beforeEach(() => service = new BookService() )


	/*****************************************************
	*                     !::UNIT|TEST::!                *
	******************************************************/
	describe('The mock test', () => {
		test('test for getBooks', ()=> {
			/* ------- * <AAA>--<AAA> * ------ */
			// Arrange -> Act ->
			let books = service.getAll()
			// Assert ->
			expect(books.length).toEqual(2)
		})
	})
})
