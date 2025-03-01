'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

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

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));

// ////////  Same thing
// console.log(arr.slice());
// console.log([...arr]);

// // Splice actually changes the original array
// console.log(arr.splice(2));

// // Remove the last element from the array
// console.log(arr.splice(-1));
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// ///// REVERSE
// console.log(arr2.reverse());
// console.log(arr2);

// ///// CONCAT SAME THING
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// const arrArr = [23, 11, 64];
// console.log(arrArr[0]);
// console.log(arrArr.at(0));

// // At works for strings and arrays
// console.log(arrArr[arrArr.length - 1]);
// console.log(arrArr.slice(-1)[0]);
// console.log(arrArr.at(-1));
// console.log('Anthony'.at(0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) console.log(`You deposited ${movement}`);
//   else console.log(`You withdrew ${Math.abs(movement)}`);
// }

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// // ForEach has access to the element, the index, and the entire array
// // Impossible to break out of the forEach loop
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) console.log(`You deposited ${mov}`);
//   else console.log(`You withdrew ${Math.abs(mov)}`);
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// MAPS
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SETS key and value are the same thing since sets don't have keys
const currenciesUnique = new Set(['USD', 'EUR', 'Euro', 'GBP', 'Euro']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
