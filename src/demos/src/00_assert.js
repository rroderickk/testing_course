/****************************************************************
*                     *::CONSOLE.ASSERT::*                      *
****************************************************************/
const caja = 'hello'

console.log('*************************')

console.assert(caja === '1', 'hola no es hello')

console.log('*************************')

console.assert(caja === 'hello', 'hola no es hello') || console.log('::Assertion passed::')

console.log('*************************')