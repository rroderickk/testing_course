/****************************************************************
*                           *::CASE::*                          *
****************************************************************/
export class Person {
	constructor (name, age, weight=80, height=1.76) {
		this.name = name
		this.age = age
		this.weight = weight
		this.height = height
	}

	/**
	 * It returns a string based on the value of the result variable.
	 *
	 * @return The result of the calculation of the IMC.
	 */
	calcIMC () {
		let result = Math.round(this.weight / (this.height * this.height))

		if (result < 0) 			  { return 'Invalid data' }
		if (result >= 0  && result < 18)  { return 'Down' }
		if (result >= 18 && result <= 24) { return 'Normal' }
		if (result >= 25 && result <= 26) { return 'Overweight' }
		if (result >= 27 && result <= 29) { return 'Overweight level 1' }
		if (result >= 30 && result <= 39) { return 'Overweight level 2' }
		if (result >= 40) 								{ return 'Overweight level 3' }

		return 'not found'
	}

	/**
	 * Simply prints a message to the console with dataPerson.
	 */
	greet () {
		console.log(`
		Hello, my name is ${this.name},
		my wheight is ${this.weight} and my age is ${this.age}
		my imc is ${this.calcIMC()}`
		)
	}
}

/****************************************************************
*                       *::INSTANCING::*                        *
****************************************************************/
const John = new Person('John', 20, 90, 1.10)
John.greet()