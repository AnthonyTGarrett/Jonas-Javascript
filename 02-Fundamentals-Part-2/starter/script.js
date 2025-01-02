"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I can drive :D");

// function logger() {
//   console.log("My name is Tony");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice made with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declaration
// Can be called before being defined
// console.log(calcAge1(1979));

// function calcAge1(birthYear) {
//   return new Date().getFullYear() - birthYear;
// }

// // Function Expression
// const calcAge = function (birthYear) {
//   return new Date().getFullYear() - birthYear;
// };
// console.log(calcAge2(1979));

// // Function expression short form
// const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;
// console.log(calcAge3(1979));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = new Date().getFullYear() - birthYear;
//   const retirement = 67 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1979, "Tony"));

// const friends = ["Tony", "Wes", "Tommy"];

// Push returns the array length
// const newLength = friends.push("Jay");
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// // Removing elements - Returns the element removed
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Wes"));
// console.log(friends.indexOf("Taunya"));
// console.log(friends.includes("Tony"));
// console.log(friends.includes("Taunya"));

// const calcTip = (tip) => (tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[0], bills[2] + tips[2]];

// console.log(tips);
// console.log(totals);

// const calcAge = function (birthYear) {
//   return new Date().getFullYear() - birthYear;
// };

// Objects
// const Person = {
// firstName: "Anthony",
// lastName: "Garrett",
// age: calcAge(1979),
// job: "Software Engineer",
// friends: ["Tommy", "Wes", "John"],
// };

// console.log(Person);
// console.log(Person.lastName);
// console.log(Person.age);
// console.log(Person["lastName"]);
// console.log(Person["age"]);

// const nameKey = "Name";
// console.log(Person["first" + nameKey]);
// console.log(Person["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about the Person? Choose between firstName, lastName, age, job, and friends"
// );

// if (Person[interestedIn]) {
//   console.log(Person[interestedIn]);
// } else {
//   console.log("Wrong request.");
// }

// Person.location = "United States";
// console.log(Person);

// console.log(
//   `${Person.firstName} has ${Person.friends.length} friends, and his best friend is called ${Person.friends[0]}`
// );

// const tony = {
//   firstName: "Anthony",
//   lastName: "Garrett",
//   birthYear: 1979,
//   job: "Software Engineer",
//   friends: ["Tommy", "Wes", "John"],
//   hasDriversLicense: true,

//   // calcAge: function () {
//   //   return new Date().getFullYear() - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// console.log(tony.calcAge());
// console.log(tony.age);

// console.log(tony.getSummary());

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// john.calcBMI();
// mark.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`
//   );
// } else {
//   console.log(
//     `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`
//   );
// }

// for (let i = 1; i < 11; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️`);
// }

// const types = [];

// const tony = [
//   "Anthony",
//   "Garrett",
//   45,
//   "Software Engineer",
//   ["Wes", "Tommy", "Chris"],
// ];

// for (let i = 0; i < tony.length; i++) {
//   console.log(tony[i]);

//   types.push(typeof tony[i]);
// }

// console.log(types);

// for (let i = 0; i < tony.length; i++) {
//   if (typeof tony[i] !== "string") continue;
// }

// const tony = [
//   "Anthony",
//   "Garrett",
//   45,
//   "Software Engineer",
//   ["Wes", "Tommy", "Chris"],
// ];

// for (let i = tony.length - 1; i >= 0; i--) {
//   console.log(tony[i]);
// }

const calcTip = (tip) => (tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(totals);

const calcAverage = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

console.log(calcAverage(bills));
