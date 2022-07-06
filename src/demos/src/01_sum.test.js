import { sum } from './01_sum.js'

/****************************************************************
*                       *::FISRT|TEST::*                        *
****************************************************************/
/**
 * ## Basic Structure.
 * test('label', () => {
 * 	const result = sum(1, 3)
 *   expect(result).toBe(4)
 * };
 */
test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3)
})
