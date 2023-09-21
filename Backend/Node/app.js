const _ = require('lodash');

const myNumbers = [5, 2, 9, 3, 6, 2, 8, 1, 5, 4, 7];

const sortedNumbers = _.orderBy(myNumbers);
const uniqueNumbers = _.uniq(myNumbers);
const evenNumbers = _.filter(myNumbers, (number) => number % 2 === 0);
const doubledNumbers = _.map(myNumbers, (number) => number * 2);
const sumOfNumbers = _.sum(myNumbers);

console.log('Array original:', myNumbers);
console.log('Array ordenado:', sortedNumbers);
console.log('Array sem duplicatas:', uniqueNumbers);
console.log('Números pares:', evenNumbers);
console.log('Números dobrados:', doubledNumbers);
console.log('Soma de todos os elementos:', sumOfNumbers);