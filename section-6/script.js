'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //console.log(firstName);

//   function printAge() {
//     let output = `You are ${age},born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       output = 'NEW OUTPUT';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // nie ma dostepu console.log(str);
//     console.log(millenial);
//     console.log(output);
//     //  ma bo jest var
//     // tez nie ma dostepu add(a, b);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);
// // nie działa console.log(age);
// // nie diała printAge();
// // nie maa dostepu do danych

console.log(me);
//console.log(job);
//console.log(year);
var me = `Jonas`;
let job = 'teacher';
const year = 1991;

// function
console.log(addDelc(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));
function addDelc(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

//example
console.log(undefined);
if (!numProducts) delteShopingCart();
var numProducts = 10;
function delteShopingCart() {
  console.log(`All poducts deleted!`);
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
