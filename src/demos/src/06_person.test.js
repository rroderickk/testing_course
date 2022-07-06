import { Person } from './06_person'

describe('Suit of test Person class cases', () => {
	test('case Juan', () => {
		const Juan = new Person('Juan', 20, 60, 1.80)
		expect(Juan.name).toBe('Juan')
		expect(Juan.age).toBe(20)
		expect(Juan.weight).toBe(60)
		expect(Juan.height).toBe(1.80)
		expect(Juan.calcIMC()).toBe('Normal')
		Juan.greet()
	})
})

describe('Test expected cases', () => {
	test('case Person', () => {
		const person = new Person('Person', 20, 60, 1.80)
		const expectedCASE = person.calcIMC()
		expect(expectedCASE).toBe('Normal')
	})
	test('case Juan Doe', () => {
		const person = new Person('Juan', 20)
		const expectedCASE = person.calcIMC()
		expect(expectedCASE).toBe('Overweight')
	})
})