/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* 
SIMPLE ARAY METHODS

*/

// SLICE METHOD
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.slice(2);
// console.log(arr.slice(2)); // Logs ['c','d','e']
// console.log(arr.slice(2, 4)); // Logs ['c','d']
// console.log(arr.slice(-2)); // Logs ['d','e']
// console.log(arr.slice(-1)); // Logs ['e']
// console.log(arr.slice(1, -2)); // Logs ['b','c']
// console.log(arr.slice()); // Logs ['a', 'b', 'c', 'd', 'e']

// SPLICE METHOD
// console.log(arr.splice(2)); // Logs ['c','d','e']
// console.log(arr); // Logs ['a', 'b'] The splice method deletes/changes the array
// The splice is usually used when we want to delete an element from the array

// REVERSE
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // Logs ['f','g','h','i','j']
// // The reverse method mutates the original array also
// console.log(arr2); // Logs ['f','g','h','i','j']

// CONCAT METHOD
// const letters = arr.concat(arr2);
// console.log(letters); // logs ['a', 'b', 'c', 'd', 'e','f','g','h','i','j']
// // This is the same as using
// console.log([...arr, ...arr2]); // logs ['a', 'b', 'c', 'd', 'e','f','g','h','i','j']

// // JOIN METHOD
// console.log(letters.join(' - '));

/* 

THE AT METHOD

*/

// const arr = [23, 11, 64];
// console.log(arr[0]); // Targeting the first element of the aray
// // The at method 2022 UPDATE -
// console.log(arr.at(0)); // Targeting the first element of the aray using the at method

// // getting the last element the old way
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// // Using the new at method
// console.log(arr.at(-1));
// // The at method works on strings
// console.log('Jonas'.at(0));
// console.log('Jonas'.at(3));

/* 

LOOPING OVER AN ARAY: FOR EACH

*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// FOR OF LOOP
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     // Math.abs removes the - from the number (-400, -650 etc)
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// FOR EACH METHOD
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} You deposited ${movement}`);
//   } else {
//     // Math.abs removes the - from the number (-400, -650 etc)
//     console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
//   }
// });

// // FOR EACH WORKING WITH MAPS NAD SETS
// // MAPS
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

/* 

CHALLENGE #01

*/

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];
// dogsJulia.slice();
// const dogsJuliaCorrected = dogsJulia.slice(1, 3);
// console.log(dogsJuliaCorrected);
// const bothDogs = dogsJuliaCorrected.concat(dogsKate);
// console.log(bothDogs);

// bothDogs.forEach(function (dog, index) {
//   if (dog >= 3) {
//     console.log(`Dog number ${index + 1} is an adult and is ${dog} years old`);
//   } else {
//     console.log(
//       `Dog number ${index + 1} is ${dog} years old and it's still a puppy :)`
//     );
//   }
// });

/* 

DATA TRANSFORMATION: MAP, FILTER, REDUCE

*/

/* 

MAP

*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUsd);

// // const movementsUSDfor = [];
// // for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// // console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(function (movement, index) {
//   return `Movement ${
//     index + 1
//   }: You ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(movement)}`;
//   // THis is the same as above, but a lot more code.
//   // if (movement > 0) {
//   //   return `Movement ${index + 1} You deposited ${movement}`;
//   // } else {
//   //   // Math.abs removes the - from the number (-400, -650 etc)
//   //   return `Movement ${index + 1} You withdrew ${Math.abs(movement)}`;
//   // }
// });

// console.log(movementsDescriptions);

/* 

FILTER

*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const depositsArray = movements.filter(function (mov) {
//   if (mov > 0) {
//     return mov;
//   }
// });

// console.log(depositsArray);

// // The same as the filter method using For Of Loop (more complicated)
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawal = movements.filter(function (movement) {
//   if (movement < 0) return movement;
// });
// console.log(withdrawal);

/* 

REDUCE

*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // accumulator is like a snowball (as it keeps rolling it keeps getting bigger)
// const balance = movements.reduce(function (accumulator, current, index, array) {
//   console.log(`Itteration ${index}: ${accumulator}`);
//   return accumulator + current;
// }, 0);
// console.log(balance);

// // Using For Of Loop doing the same thing as above
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value using reduce method (should log 3000)
// const max = movements.reduce(function (acc, mov) {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);
/* 

CHALLENGE #02 DONE BY MYSELF

*/

// const dogAge = [5, 2, 4, 1, 15, 8, 3];
// const dogAge = [16, 6, 10, 5, 6, 1, 4];
// let humanAge = 0;
// const calcAverageHumanAge = dogAge.map(function (ages) {
//   if (ages <= 2) {
//     return 2 * ages;
//   } else if (ages > 2) {
//     return 16 + ages * 4;
//   }
// });
// console.log(calcAverageHumanAge);
// const exclude = calcAverageHumanAge.filter(function (value) {
//   if (value >= 18) return value;
// });
// console.log(exclude);
// const calcTotal =
//   exclude.reduce(function (acc, cur) {
//     return acc + cur;
//   }, 0) / exclude.length;
// console.log(calcTotal);
/* 

CHAINIG METHODS

*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// PIPELINE
// const totalDeposits = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDeposits);
/* 

CHALLENGE #03 DONE BY MYSELF

*/

// const dogAge = [5, 2, 4, 1, 15, 8, 3];
// // const dogAge = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = dogAge
//   .map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4))
//   .filter(ages => ages >= 18)
//   .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// console.log(calcAverageHumanAge);
/* 

THE FIND METHOD - retrieves an ellement from the array (only one) simillar to filter method(which retrieves all of the elements)

*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(function (mov) {
//   return mov < 0;
// });
// console.log(firstWithdrawal);
// // Real example
// console.log(accounts);

// const account = accounts.find(function (acc) {
//   return acc.owner === 'Tanja Budjakovska Ilievska';
// });
// console.log(account);

// let account;
// for (const acc of accounts) {
//   if (acc.owner === 'Tanja Budjakovska Ilievska') {
//     account = acc;
//   }
// }
// console.log(account);
/* 

SOME AND EVERY METHOD
*/
// SOME
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// console.log(movements.includes(-130)); // Checks if -130 is in the array

// // Some checks if the condition below is true
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);
// // EVERY
// console.log(movements.every(mov => mov > 0));
// // The every method checks if the condition is met in all of the elements of the array
// console.log(account4.movements.every(mov => mov > 0));

// // Cool thing example
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
// /*

// FLAT AND FLAT MAP

// */
// // Flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); //LOgs [1, 2, 3, 4, 5, 6, 7, 8]

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat()); //Logs [Array(2), 3, 4, Array(2), 7, 8]
// console.log(arrDeep.flat(2)); //Logs [1, 2, 3, 4, 5, 6, 7, 8]

// // An example with the bankist app
// const accountMovements = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(accountMovements);

// // FLAT MAP
// const accountMovements2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(accountMovements2);
/* 

SORTING ARRAYS

*/
// // Sorting string arays
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); //Logs it alphabetically ['Adam', 'Jonas', 'Martha', 'Zach']
// console.log(owners); // It mutates the original array
// // Sorting numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.sort()); // Did not sort the numbers
// // The sort method only works with strings
// // For numbers u need a callback function
// movements.sort((a, b) => a - b);
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// console.log(movements);
/* 

CREATING ARRAYS

*/

// Generate arrays programatically
// const x = new Array(7);
// console.log(x); //Logs 7 empry array
// // x.fill(1);
// console.log(x); //Logs [1, 1, 1, 1, 1, 1, 1]
// x.fill(1, 3, 5);
// console.log(x);

// // From
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// // Create an array from 1-7; Using _ means we dont use that element
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z); // Logs [1, 2, 3, 4, 5, 6, 7]

// // QuerySelectorAll

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => (el = parseInt(el.textContent))
//   );
//   console.log(movementsUI);
// });

// // Challenge 100 random dice rolls
// const dice = Array.from({ length: 100 }, () => Math.floor(Math.random() * 7));
// console.log(dice);

// Array Methods practice
// 1. Calculate the toal deposits in all 4 of the accounts in the bankist app
// const bankDepositsSum = accounts
//   .flatMap(account => account.movements)
//   .filter(filter => filter > 0)
//   .reduce((total, current) => total + current, 0);

// console.log(bankDepositsSum);
// //  2. Count how many deposits there have been with at least $1000
// // One way (I prefer this way)
// const numDeposits1000 = accounts
//   .flatMap(account => account.movements)
//   .filter(filter => filter >= 1000).length;
// console.log(numDeposits1000);
// // Second way (I prefer the first way)
// const numDeposits10002 = accounts
//   .flatMap(account => account.movements)
//   .reduce((sum, cur) => (cur >= 1000 ? sum + 1 : sum), 0);
// console.log(numDeposits10002);
// 3. Create a new object
// const darko = accounts
//   .flatMap(account => account.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(darko);
// // 4. Create a function that turns string to a Title case
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word)
//         ? word
//         : word.at(0).toUpperCase() + word.slice(1)
//     )
//     .join(' ');
//   return titleCase;
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('And here is another title with an EXAMPLE'));

/* 

CHALLENGE #04 PARTIALLY DONE BY MYSELF
//  #01
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// #01
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//  #02
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'too much' : 'less'
  }`
);
// #03
const ownersEatTooMuch = dogs
  .filter(owner => owner.curFood > owner.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(owner => owner.curFood < owner.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
// #04
console.log(
  `${ownersEatTooMuch.join(
    ' and '
  )}'s dogs eat too much and ${ownersEatTooLittle.join(
    ' and '
  )}'s dogs eat to little`
);
// #05
console.log(dogs.some(dog => dog.curFood === dog.recFood));
// #06
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));
// #07
console.log(dogs.filter(checkEatingOkay));
// #08
const copy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(copy);
