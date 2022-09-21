"use strict";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I cant driv :D");
// // const interface = "Audio";
// // const privete = 534;
/////
////////////////////////////////////
/////
// function looger() {
//   console.log("My name is Kuba");
// }
// looger();
// looger();
// looger();
// looger();

// function fruitProcessor(apples, ogranges) {
//   // console.log(apples, ogranges);
//   const juice = `Juice with ${apples} apples and ${ogranges} ogranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
/////
////////////////////////////////////
/////

// // function declaration
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// // function expression

// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //arrow function
// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstname) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   return `${firstname} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Kuba"));
// console.log(yearsUntilRetirement(1977, "Bob"));
/////
////////////////////////////////////
/////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, ogranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(ogranges);
  // console.log(apples, ogranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));
