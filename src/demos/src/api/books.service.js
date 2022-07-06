import { MongoLibMock } from './db'
/****************************************************************
*                 *::CLASS|BOOKSERVICE::*                       *
****************************************************************/
export class BookService {
	constructor () {
		this.collection = 'books'
		// this.mongoDB = new MongoLib();
		this.mongoDB = new MongoLibMock()
	}

	/**
	 * This function returns a promise that resolves to an array of books.
	 *
	 * @param query This is the query object that will be used to filter the books.
	 * @return The getBooks method returns a promise.
	 */
	getBooks (query) {
		return this.mongoDB.getAll(this.collection, query)
	}

	/**
	 * It creates a new book in the database
	 *
	 * @param newBook The new book to be created
	 * @return The createBook method is returning the result of the create method.
	 * @example:
	 * 	collection.createBook({
	 * 		id: '3',
	 * 		title: 'Book 3',
	 * 		description: 'Description 3',
	 * })
	 */
	createBook (newBook) {
		return this.mongoDB.create(this.collection, newBook)
	}

	/**
	 * It returns a promise that resolves to an array of all the documents in the collection
	 *
	 * @return The getAll function from the mongoDB.js file.
	 */
	getAll () {
		return this.mongoDB.getAll(this.collection)
	}

	/**
	 * It deletes a book from the database
	 *
	 * @param id The id of the book to delete
	 * @return The return value is the result of the delete method.
	 */
	deleteBook (id) {
		return this.mongoDB.delete(this.collection, id)
	}

	/**
	 * It returns a promise that resolves to a book object.
	 *
	 * @param id the id of the book you want to get
	 * @return The getOneBook method is returning the getOne method from the MongoDB class.
	 */
	getOneBook (id) {
		return this.mongoDB.getOne(this.collection, id)
	}
}

/****************************************************************
*                      *::INSTANCING::*                         *
****************************************************************/
/*
const test_book_service = new BookService()
test_book_service.getAll()
console.log('🚀 ~ file: book.js ~ line 45 ~ test_book_service.getAll()', test_book_service.getAll())

test_book_service.createBook({
	id: '3',
	title: 'Book 3',
	description: 'Description 3',
})

test_book_service.getAll()
console.log('🚀 ~ file: book.js ~ line 45 ~ prueba.getAll()', test_book_service.getAll())
*/