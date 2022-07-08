export class Supertest {
	constructor(app) {
		this.app = {app: app}
	}

	get(url) {
		return url, this
	}

	expect(status) {
		return new Promise( resolve => {
			setTimeout(() => {
				resolve(
					{ res: {status}, text: 'hello world' }
				)
			}, 1000)
		})
	}
}

