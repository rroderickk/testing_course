import  { mod, sum, subt, mult, div } from './02_math'

describe('Suite of MATH', () => {

	test('add 1 + 3 should be 4', () => {
		const result = sum(1, 3)
		expect(result).toBe(4)
	})

	test('add 1 - 3 should be 2', () => {
		const result = subt(1, 3)
		expect(result).toBe(-2)
	})

	test('add 1 * 3 should be 3', () => {
		const result = mult(1, 3)
		expect(result).toBe(3)
	})

	test('add 1 / 3 should be ?', () => {
		const result = div(1, 3)
		expect(result).toBe(0.3333333333333333)
		// expect(result).toBe(1); // -> Failed
	})
	test('add 1 / 3 should be ?', () => {
		const R = div(4, 0)
		expect(R).toBe(Infinity)
	})

	test('add 1 % 3 should be ?', () => {
		const result = mod(1, 3)
		expect(result).toBe(1)
	})

})