/****************************************************************
 *                       *::MATCHERS::*                         *
 ****************************************************************/
test('test obj', () => {
	const data = { name: 'John' }
	data.lastName = 'Doe'
	expect(data).toEqual({ name: 'John', lastName: 'Doe' })
})

test(' null', () => {
	const data = null
	expect(data).toBeNull()
	expect(data).toBeDefined()
	expect(data).not.toBeUndefined()
})

test('booleans', () => {
	/* Checking if the value is true. */
	expect(true).toEqual(true)
	/* Checking if the value is falsy. */
	expect(false).toEqual(false)

	/* Checking if the value is falsy. */
	expect(0).toBeFalsy()
	expect('').toBeFalsy()
	expect(false).toBeFalsy()
})

test('string', () => {
	expect('Christoph').toMatch(/stop/)
})

test('list / arrays', () => {
	const numbers = [1, 2, 3, 4]
	expect(numbers).toContain(3)
})

test('test obj', () => {
	const data = { name: 'Rigo' } // Para testear objetos se usa .toEqual.
	data.lastname = 'Molina'      // Manipulación del objeto.
	expect(data).toEqual({ name: 'Rigo', lastname: 'Molina' }) // Espero que el objeto de arriba sea igual a este.
})

test('null', () => {
	const data = null
	expect(data).toBeNull() 				 // Un nulo está definido como nulo.
	expect(data).toBeDefined() 			 // Un definido es otro tipo de dato en JS.
	expect(data).not.toBeUndefined() // Podemos usar negaciones.
})

test('booleans', () => {
	// Booleanos directos.
	expect(true).toEqual(true)
	expect(false).toEqual(false)
	// Datos considerados como booleanos.
	expect(0).toBeFalsy()
	expect('').toBeFalsy()
	expect(false).toBeFalsy()
	expect(1).toBeTruthy()
})

test('string', () => {
	// Podemos preguntar si coincide una parte arbitraria con la cadena.
	expect('Christoph').toMatch(/stop/)
})

test('list / arrays', () => {
	const numbers = [1, 2, 3, 4]
	// Podemos preguntar si contiene una parte arbitraria con el arreglo.
	expect(numbers).toContain(3)
})


/****************************************************************
*                          *::BONUS::*                          *
****************************************************************/
test('comparing numbers', () => {
	const value = 2 + 2
	expect(value).toBeGreaterThan(3) 					// Es mayor a 3?
	expect(value).toBeGreaterThanOrEqual(3.5) // Es mayor o igual a 3.5?
	expect(value).toBeLessThan(5) 						// Es menor que 5?
	expect(value).toBeLessThanOrEqual(4.5) 		// Es menor o igual a 4.5?

	// ToBe y toEqual son equivalentes para números.
	expect(value).toBe(4)
	expect(value).toEqual(4)
})

test('comparing float', () => {
	const value = 3.5 + 4.2
	// Se usa toBeCloseTo para evitar errores por redondeos en numeros quebrados usando toEqual.
	expect(value).toBeCloseTo(7.7)
})

function formComplete() {
	throw new Error('You are not completed the form')
}

test('exception error', () => {
	// Probar si la función arroja error cuando se llama.
	expect(() => formComplete()).toThrow()
	expect(() => formComplete()).toThrow(Error)

	// Podemos usar el texto del error o una parte.
	expect(() => formComplete()).toThrow('You are not completed the form')
	expect(() => formComplete()).toThrow(/not completed/)
})

