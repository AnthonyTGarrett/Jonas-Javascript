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

function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1975 && birthYear <= 1996) {
      var millennial = true;
      const firstName = 'Tommy';
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    output = 'Wut';
    // add(1, 2);
    console.log(millennial);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Tony';
calcAge(1979);
