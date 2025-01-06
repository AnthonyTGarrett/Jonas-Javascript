'use strict';

// const a = 'Tony';

// function first() {
//   const b = 'Hello!';
//   second();

//   function second() {
//     const c = 'Hi!';
//     third();
//   }
// }

// function third() {
//   const d = 'Hey!';
//   console.log(d + c + b + a);
// }

// first();

// function calcAge(birthYear) {
//   const age = new Date().getFullYear() - birthYear;

//   function printAge() {
//     let output = `${firstName} is ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1975 && birthYear <= 1996) {
//       var millennial = true;
//       const firstName = 'Tommy';
//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     output = 'Wut';
//     // add(1, 2);
//     console.log(millennial);
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Tony';
// calcAge(1979);

// Variable Hoisting
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Tony';
// let job = 'Software Engineer';
// const year = 2024;

// // Function Hoisting
// // console.log(addDec1(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// // Hoisting only works on function definitions
// function addDec1(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(new Date().getFullYear() - birthYear);
//   console.log(this);
// };

// calcAge(1979);

// const calcAgeArrow = birthYear => {
//   console.log(new Date().getFullYear() - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1985);

// const tony = {
//   year: 1979,
//   calcAge: function () {
//     console.log(this);
//     console.log(new Date().getFullYear() - this.year);
//   },
// };

// tony.calcAge();

// const matilda = {
//   year: 1980,
// };

// matilda.calcAge = tony.calcAge;
// matilda.calcAge();
