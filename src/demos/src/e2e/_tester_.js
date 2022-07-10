/****************************************************************
*::::::::::::::::::::::*::CLASS|TESTER::*:::::::::::::::::::::::*
****************************************************************/
/**
 * ## Test a == b
 * @method label
 * @method it
 * @author CheatModes4
 */
export class tester_v2 {
	#green  = str => '\x1b[32m'  + str + '\x1b[0m'
	#red    = str => '\x1b[31m'  + str + '\x1b[0m'
	#_fn_   =  () =>   this.#red('::[TEST FAILED]::')
	#_fn1_  =  () => this.#green('::[TEST PASSED]::')
	#_label = ''
	/**
	 * A private method that sets the label.
	 * */
	#setLabel = (l) => this.#_label = l

	/**
	 * @return {TEST PASSED | TEST FAILED}
	 */
	result = function (a, b) {
		if (a === b) {
			return this.#_fn1_()
		}
		else {
			return this.#_fn_()
		}
	}

	/**
	 * @param l - the label to show
	 * */
	label = (l) => {
		this.#setLabel(l)
		return this
	}

	/**
	 * ###### .it a === b ?   TEST PASSED  :  TEST FAILED
	 * const _tester_ = new tester_v2();
	 *
	 * @Examples
	 * _tester_.label('prueba_string',).it('test1', 'test1')
	 *
	 * _tester_.label('test_string',).it('hola', '!hola')
	 *
	 * _tester_.label('spected_number',).it(1, 0)
	 *
	 * _tester_.label('prueba_number',).it(1, 1)
	 *
	 * @annon_iffe
	 * _tester_.label('prueba_function_iffe',).it( (() => 1)(), (() => 1) )
	 *
	 * @annon_function
	 * _tester_.label('prueba_function_iffe',).it(() => 1, () => 1)
	 *
	 * A function that takes 2 parameters, `a`, and `b`. It then checks if `a` or `b` are numbers,
	 * and if so, it logs the label and the result of the test. If `a` or `b` are not numbers, it checks
	 * if they are falsy, and if so, it logs the label and the string `'Invalid test'`. If `a` and `b` are
	 * not falsy, it logs the label and the result of the test.
	 *
	 * @param a - first param to eval
	 * @param b - second param to eval
	 */
	it = function (a, b) {

		if (typeof(a || b) === 'function') {
			let [_a, _b] = [a(), b()]
			console.log('\t', this.#_label, this.result(_a,_b))
		}

		else if (typeof(a || b) === 'number'){
			console.log('\t', this.#_label, this.result(a, b))
		}

		else if (!a || !b) {
			console.log('\t', this.#_label, 'Invalid test')
		} else {
			console.log('\t',this.#_label, this.result(a, b))
		}

		return this
	}
}
