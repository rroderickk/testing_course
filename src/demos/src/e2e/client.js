import { tester_v2 } from './_tester_.js'
import { Supertest } from './supertest.js'

(async () => {
	const tester = new tester_v2()
	const h = new Supertest('h')

	/****************************************************************
	*                !::MYTEST vs MYFAKESERVER::!                   *
	****************************************************************/
	tester
		.label('TEST: MYTEST vs MYFAKESERVER')
		.it(
			await h.get('url').expect(200).then(res => res.text)
			,'hello world'
		)

	tester
		.label('TEST: MYTEST vs MYFAKESERVERFAIL')
		.it(
			await h.get('url').expect(200).then(res => res.text)
			,'hello wold'
		)
})()