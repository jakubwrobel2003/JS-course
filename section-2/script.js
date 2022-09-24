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

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, ogranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(ogranges);
//   // console.log(apples, ogranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstname) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstname} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstname} has already retired`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1991, "Kuba"));
// console.log(yearsUntilRetirement(1970, "Bob"));
// ////////////////////////////////////
// //Challange #1
// ////////////////////////////////////
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// //
// ////////////////////////////////////
//
// Array

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstname = "Kuba";
const kuba = [firstname, "Wrobel", 2037 - 2003, "Student", friends];
console.log(kuba);
console.log(kuba.length);

//Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];

calcAge(years[0]);
console.log(calcAge(years[3]));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
