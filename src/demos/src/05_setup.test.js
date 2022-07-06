/****************************************************************
*                        *::SCOPE|ONE::*                        *
****************************************************************/
'reune un conjunto de prueba'
describe('label', () => {

	beforeAll(() => {
		//'test_case_1'
		// correra primero que todos
		expect(4).toBe(4)
	})
	test('test_case_2', () => {
		expect(4).toBe(4)
	})
	test('test_case_3', () => {
		expect(4).toBe(4)
	})
	test('test_case_4', () => {
		expect(4).toBe(4)
	})

})

/****************************************************************
*                        *::SCOPE|TWO::*                        *
****************************************************************/
describe('label_scope_2', () => {
	// beforeAll( () => {
	// 	//'test_case_1'
	// 	expect(4).toBe(4)
	// 	// example: update db
	// })
	// afterAll( () => {
	// 	//'test_case_2'
	// 	expect(4).toBe(4)
	// 	// example: down db
	// })
	// beforeEach( () => {
	// 	//'test_case_3_run_before_each'
	// 	expect(4).toBe(4)
	// })
	// afterEach( () => {
	// 	expect(4).toBe(4)
	// })
})

/****************************************************************
*                      *::MORE|EXAMPLES::*                      *
****************************************************************/
// beforeAll(() => {
// 	return initializeCityDatabase()
// })

// afterAll(() => {
// 	return clearCityDatabase()
// })

// test('city database has Vienna', () => {
// 	expect(isCity('Vienna')).toBeTruthy()
// })

// test('city database has San Juan', () => {
// 	expect(isCity('San Juan')).toBeTruthy()
// })