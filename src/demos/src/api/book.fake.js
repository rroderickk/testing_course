// https://github.com/ngneat/falso
// npm i @ngneat/falso --save-dev
// npm install @faker-js/faker --save-dev

// Agregando la regla a /testing-js/api/.eslintrc.js
//   rules: {
//     'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
//   },

// import { faker } from 'faker'

// const generateOneBook = () => ({
// 	_id: faker.datatype.uuid(),
// 	name: faker.commerce.productName(),
// 	price: faker.commerce.price(),
// });

// const generateManyBook = (size) => {
// 	const limit = size ?? 10; // Si no me envian el tamaño genero 10 libros.
// 	const fakeBooks = []; // Colocando los fakeBooks generados.
// 	for (let index = 0; index < limit; index += 1) {
// 		fakeBooks.push(generateOneBook());
// 	}
// 	return [...fakeBooks];
// };

