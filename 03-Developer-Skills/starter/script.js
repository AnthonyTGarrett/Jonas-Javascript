// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let maxTemp = temps[0];
//   let minTemp = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;

//     if (currTemp > maxTemp) maxTemp = currTemp;
//     if (currTemp < minTemp) minTemp = currTemp;
//   }
//   console.log(maxTemp);
//   console.log(minTemp);
// };

// calcTempAmplitude([3, 7, 4, -2, 'error', 14]);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     value: Number(prompt('Degrees Ceslsius: ')),
//   };
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForcast = arr => {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += `... ${arr[i]}degC in ${i + 1} days `;
  }
  return result;
};

console.log(printForcast(testData1));
console.log(printForcast(testData2));
