/****************************************************************
*                           *::MOCK|DB::*                       *
****************************************************************/
export class MongoLibMock {
	constructor () {
		this.books = [
			{
				id: '1',
				title: 'Book 1',
				description: 'Description 1',
			},
			{
				id: '2',
				title: 'Book 2',
				description: 'Description 2',
			},
		]
		this.collection = this.books
	}

	/**
	 * It returns the books array.
	 *
	 * @param collection The name of the collection you want to query.
	 * @param query The query object.
	 * @return The books array.
	 */
	getAll () {
		return this.books
	}

	/**
	 * The function takes in two parameters, a collection and data. It then returns the data pushed into
	 * the collection
	 *
	 * @param collection The name of the collection you want to create.
	 * @param data The data to be inserted into the collection.
	 * @return The length of the array.
	 */
	create (collection, data) {
		return this.books.push(data)
	}

	/**
	 * The function takes in a collection and an id, and then finds the index of the book in the
	 * collection that has the same id as the id passed in, and then deletes that book from the
	 * collection.
	 *
	 * @param collection The name of the collection you want to delete from.
	 * @param id The id of the book to delete.
	 */
	delete (collection, id) {
		const bookIndex = this.books.findIndex(book => book.id === id)
		this.books.splice(bookIndex, 1)
	}

	/**
	 * The function takes in a collection and an id, and returns the book that matches the id
	 *
	 * @param collection The name of the collection you want to get the data from.
	 * @param id The id of the book to be retrieved.
	 * @return The book with the id of 1.
	 */
	getOne(collection, id) {
		return this.books.find(book => book.id === id)
	}
}