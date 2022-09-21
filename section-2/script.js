"use strict";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I cant driv :D");
// // const interface = "Audio";
// // const privete = 534;

function looger() {
  console.log("My name is Kuba");
}
looger();
looger();
looger();
looger();

function fruitProcessor(apples, ogranges) {
  // console.log(apples, ogranges);
  const juice = `Juice with ${apples} apples and ${ogranges} ogranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
