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

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstname = "Kuba";
// const kuba = [firstname, "Wrobel", 2037 - 2003, "Student", friends];
// console.log(kuba);
// console.log(kuba.length);

// //Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// calcAge(years[0]);
// console.log(calcAge(years[3]));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//
// ////////////////////////////////////
//
// const friends = ["Michael", "Steven", "Peter"];

// Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// Reemove elements

// friends.pop();

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }
// ////////////////////////////////////
// //Challange #2
// ////////////////////////////////////
// const bill = 275;

// const finishBill =
//   bill >= 50 && bill <= 300 ? bill + bill * tipSmall : bill + bill * tipBig;
// const bill = [125, 555, 44];
// function finishBill(bill) {
//   const tipSmall = 0.15;
//   const tipBig = 0.2;
//   if (bill >= 50 && bill <= 300) {
//     return bill + bill * tipSmall;
//   } else {
//     return bill + bill * tipBig;
//   }
// }
// const total = [finishBill(bill[0]), finishBill(bill[1]), finishBill(bill[2])];
// console.log(
//   `The bill was ${bill[0]}, the tip was ${
//     finishBill(bill[0]) - bill[0]
//   } and ${finishBill(bill[0])}`
// );
// console.log(total);

// ////////////////////////////////////
//Object

// const jonasArray = [
//   "Jonas",
//   "Schmedtman",
//   2037 - 1991,
//   "teacher",
//   ["Michale", "Peter", "Steven"],
// ];

// const jonas = {
//   fristName: "Jonas",
//   lastName: "Schmedtman",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michale", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas[`frist` + nameKey]);
// console.log(jonas[`last` + nameKey]);

// const intrestedIn = prompt("waht do you want to know about Jonas?");

// console.log(jonas[intrestedIn]);

// if (jonas[intrestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// jonas.location = "Portugal";
// jonas["twiter"] = "@jonasschmedtman";

// console.log(jonas);

// //Challange

// console.log(
//   `${jonas.fristName} have ${jonas.friends.length} friends, and his best friend is called ${jonas.friendsa[0]}`
// );

// ////////////////////////////////////
//

// const jonas = {
//   fristName: "Jonas",
//   lastName: "Schmedtman",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michale", "Peter", "Steven"],
//   hasDriverLicense: true,

//   // calcAge: function (birthYea) {
//   //
//   //   return 2037 - birthYeah;
//   // },

//   // calcAge: function (birthYea) {
//   //   console.log(this);
//   //   return 2037 - this.birthYeah;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.fristName} is a ${this.calcAge()} ${this.job} and he has a ${
//       this.hasDriverLicense ? "a" : "no"
//     } driver's licence`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);

// console.log(jonas.getSummary());

// ////////////////////////////////////
// //Challange #3
// ////////////////////////////////////
// const John = {
//   firstname: "John",
//   lastname: "Smith",
//   fullname: "John Smith",
//   weight: 92,
//   hight: 1.95,
//   calcBMI: function () {
//     return this.weight / (this.hight * this.hight);
//   },
// };
// const Mark = {
//   firstname: "Mark",
//   lastname: "Miller",
//   fullname: "Mark Miller",
//   weight: 78,
//   hight: 1.69,
//   calcBMI: function () {
//     return this.weight / (this.hight * this.hight);
//   },
// };

// console.log(
//   `${John.calcBMI() > Mark.calcBMI() ? John.fullname : Mark.fullname}'s BMI (${
//     John.calcBMI() > Mark.calcBMI() ? John.calcBMI() : Mark.calcBMI()
//   })
//     is higher than ${
//       John.calcBMI() < Mark.calcBMI() ? John.fullname : Mark.fullname
//     }'s
//     (${John.calcBMI() < Mark.calcBMI() ? John.calcBMI() : Mark.calcBMI()})
//     `
// );

// ////////////////////////////////////
// LOOP

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetitions  ${rep}`);
// }

// const jonasArray = [
//   "Jonas",
//   "Schmedtman",
//   2037 - 1991,
//   "teacher",
//   ["Michale", "Peter", "Steven"],
//   true,
// ];
// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//   //reading
//   console.log(jonasArray[i], typeof jonasArray[i]);
//   //dopisywanie
//   // types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);
// //contiuue and break

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }
// console.log("---Break with number---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonasArray = [
//   "Jonas",
//   "Schmedtman",
//   2037 - 1991,
//   "teacher",
//   ["Michale", "Peter", "Steven"],
// ];
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(jonasArray[i]);
// }
////////////////////////////////////
//While

for (let rep = 1; rep <= 10; rep++) {
  //console.log(`Lifting weights repetitions  ${rep}`);
}
let rep = 1;
while (rep <= 10) {
  //console.log(`WHILE Lifting weights repetitions  ${rep}`);
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`youu rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end..`);
}
