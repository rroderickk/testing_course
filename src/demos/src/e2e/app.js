class App {
	constructor () {}
	listen (port) {
		console.log(`Listening on port ${port}`)
	}
	close () {
		return new Promise( resolve => {
			setTimeout(() => {
				console.log('Closing server')
				resolve(0)
				return 0
			})
		})
	}
}

export const app = new App()