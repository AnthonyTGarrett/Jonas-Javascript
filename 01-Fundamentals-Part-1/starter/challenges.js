let marksMass = 78;
let marksHeight = 1.69;

let johnsMass = 92;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / johnsHeight ** 2;

let markHigherBMI = marksBMI > johnsBMI;

console.log(
  `Mark weighs ${marksMass}kg and is ${marksHeight}m tall. His BMI is ${marksBMI}`
);

console.log(
  `John weighs ${johnsMass}kg and is ${johnsHeight}m tall. His BMI is ${johnsBMI}`
);
