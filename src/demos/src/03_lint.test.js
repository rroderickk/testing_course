import { getA } from './03_lint.js'

/****************************************************************
*                         *::TEST|FN::*                         *
****************************************************************/
test('getA() soult to be 4', () => {

	if (typeof getA === 'function') {
		let R = getA()
		expect(R).toBe(4)
	} else {
		expect(getA).toBe(4)
	}

})