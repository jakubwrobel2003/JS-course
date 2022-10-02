'use strict';
// Remember, we're gonna use strict mode in all scripts now!

// const calcAge = birthYear => 2037 - birthYear;

// console.log();

// const temperatures = [13, -2, -6, 1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curtemp = temps[i];
//     if (typeof curtemp !== 'number') continue;
//     if (curtemp > max) max = curtemp;
//     if (curtemp < min) min = curtemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// console.log(calcTempAmplitude(temperatures));
// // problem2

// const temperaturesNew = [13, -2, -6, 1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curtemp = temps[i];
//     if (typeof curtemp !== 'number') continue;
//     if (curtemp > max) max = curtemp;
//     if (curtemp < min) min = curtemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// console.log(calcTempAmplitudeNew([1, 2, 6], [-1, 20, 4]));

// const measuerKelvin = function () {
//   const measuerement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius')),
//   };
//   // console.log(measuerement);
//   // console.log(measuerement.value);
//   // console.warn(measuerement.value);
//   // console.error(measuerement.value);
//   const kelvin = measuerement.value + 237;
//   return kelvin;
// };
// // A) indentify
// console.log(measuerKelvin());

const temperatures = [17, 21, 23];

const printForecast = function (temps) {
  let text = '';
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    text = text + `... ${curtemp} C in ${i + 1} days`;
  }
  return text;
};
console.log(printForecast(temperatures));
