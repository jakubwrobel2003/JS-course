/*let js = "amazing";

console.log(40 + 8 + 2 - 100);
console.log("kkuyba");
console.log(23);
let firstName = "kuba";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let kubaWrobel = 'kw';
let $function =27;
let person ="kuba";
let PI = 3.1415;

let myFirstJob ="Coder";
let myCurrentJob ="teacher"
 let job1 = "programer"
 let job2 ="teacher"

 console.log(
  myFirstJob
 )
*/
// true;
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");
// javaScriptIsFun = "yes!";
// console.log(typeof javaScriptIsFun);
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(year);
// console.log(typeof year);
// console.log(typeof null);
// let age = 30;
// age = 31;
// const birthYear = 1991;
// // birthYear = 1990;
// // const job;
// var job = "programer";
// job = "teacher";
// lastName = "wrobel";
// console.log(lastName);

// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// const firstName = "kuba";
// const lastName = "wrobel";
// console.log(firstName + " " + +lastName);
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// ////////////////////////////////////
// //Challange #1
// ////////////////////////////////////
// const marksMass = 78;
// const marksHight = 1.69;
// const johnMass = 92;
// const johnHight = 1.95;

// const firstGuyBMI = marksMass / (marksHight * marksHight);
// console.log(firstGuyBMI);
// const secGuyBMI = johnMass / (johnHight * johnHight);
// console.log(secGuyBMI);
// let markHugherBMI = firstGuyBMI > secGuyBMI;
// console.log(markHugherBMI);

// const firstName = "jonas";
// const job = "teacher";
// const birthDay = 1991;
// const year = 2037;
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthDay) + " years old " + job + "!";
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year - birthDay} years old ${job}!`;
// console.log(jonasNew);
// console.log(`Just a regular string...`);
// console.log("String with \n\
// multiple\n\
// lines");

// console.log(`String
// multiple
// line`);

// const age = 19;
// // const isOldEnouch = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving licence");
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearLeft} years:)`);
// }
// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// ////////////////////////////////////
// //Challange #2
// ////////////////////////////////////
// const marksMass = 78;
// const marksHight = 1.69;
// const johnMass = 92;
// const johnHight = 1.95;

// const marksBMI = marksMass / (marksHight * marksHight);
// console.log(marksBMI);
// const johnsBMI = johnMass / (johnHight * johnHight);
// console.log(johnsBMI);
// let markHugherBMI = marksBMI > johnsBMI;
// console.log(markHugherBMI);

// if (marksBMI > johnsBMI) {
//   console.log(
//     `Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI}) BMI`
//   );
// } else {
//   console.log(`John (${johnsBMI}) BMI is higher than Mark's BMI (${marksBMI})`);
// }
// ////////////////////////////////////

//type  conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 1);
// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercing
// console.log(`I'm ` + 23 + ` years old`);
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// let n = "1" + 1; //11
// n -= 1;
// console.log(n);

////////////////////////
//5 falsy values: 0, '', undefined, null, NaN
////////////////////////
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
// const money = 0;
// if (money) {
//   console.log("Don't spend it all;)");
// } else {
//   console.log("You should get a job");
// }
// let hight;
// if (hight) {
//   console.log("Hight is defined");
// } else {
//   console.log("Hight is UNDEFINED");
// }
////////////////////////////////////////////////
////////////////////////
// const age = "18";
// if (age === 18) console.log("jesteś dorosly strict");
// if (age == 18) console.log("jesteś dorosly loose");
// const fav = Number(prompt("what is your favorite nubmer"));
// console.log(fav);
// console.log(typeof fav);
// if (fav === 23) {
//   console.log("cool! 23 is an amaizng number");
// } else if (fav === 7) {
//   console.log("7 is ok");
// } else {
//   console.log("number is not 23 or 7");
// }
// if (fav !== 23) console.log("why no 23");
////////////////////////////////////////////////
////////////////////////
// const hasDriversLicense = true;
// const hasGoodVisoin = true;

// console.log(hasDriversLicense && hasGoodVisoin);
// console.log(hasDriversLicense || hasGoodVisoin);
// console.log(!hasDriversLicense);

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVisoin && isTired);
// if (hasDriversLicense && hasGoodVisoin && !isTired) {
//   console.log("sarah is able to drive!");
// } else {
//   console.log("someone else should drive...");
// }
// ////////////////////////////////////
// //Challange #3
// ////////////////////////////////////
// let winDolphins = 0;
// let winKoalas = 0;
// // Dolphins
// const firstMatchDolphins = 96;
// const secondMatchDolphins = 108;
// const thirtMatchDolphins = 89;
// // Koalas
// const firstMatchKoalas = 88;
// const secondMatchKoalas = 91;
// const thirtMatchKoalas = 110;

// if (firstMatchDolphins > firstMatchKoalas) {
//   if (firstMatchDolphins > 100 && !firstMatchKoalas > 100) {
//     winDolphins++;
//     // console.log(winDolphins);
//     console.log("Dolphis win a match");
//   } else {
//     console.log("Draw");
//   }
// } else if (firstMatchKoalas > firstMatchDolphins) {
//   if (!firstMatchDolphins > 100 && firstMatchKoalas > 100) {
//     winKoalas++;
//     // console.log(winKoalas);
//     console.log("Koalas win a match");
//   } else {
//     console.log("Draw");
//   }
// } else {
//   console.log("Draw");
// }
// if (secondMatchDolphins > secondMatchKoalas) {
//   if (secondMatchDolphins > 100 && secondMatchKoalas < 100) {
//     winDolphins++;
//     // console.log(winDolphins);
//     console.log("Dolphis win a match");
//   } else {
//     console.log("Draw");
//   }
// } else if (secondMatchKoalas > secondMatchDolphins) {
//   if (secondMatchDolphins < 100 && secondMatchKoalas > 100) {
//     winKoalas++;
//     console.log(winKoalas);
//     console.log("Koalas win a match");
//   } else {
//     console.log("Draw");
//   }
// } else {
//   console.log("Draw");
// }

// if (thirtMatchDolphins > thirtMatchKoalas) {
//   if (thirtMatchDolphins > 100 && thirtMatchKoalas < 100) {
//     winDolphins++;
//     console.log("Dolphis win a match");
//   } else {
//     console.log("Draw");
//   }
// } else if (thirtMatchKoalas > thirtMatchDolphins) {
//   if (thirtMatchDolphins < 100 && thirtMatchKoalas > 100) {
//     winKoalas++;
//     console.log("Koalas win a match");
//   } else {
//     console.log("Draw");
//   }
// } else {
//   console.log("Draw");
// }

// if (winDolphins > winKoalas) {
//   console.log("Dolphis win");
// } else if (winKoalas > winDolphins) {
//   console.log("Koalas win");
// } else {
//   console.log("draw");
// }
////////////////////////////////////////////////
////////////////////////
// const day = "monday";

// switch (day) {
//   case "monday": //day === 'monday'
//     console.log("Plan course structur");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday": //day === 'monday'
//     console.log("Preaper theory videos");
//     break;
//   case "wednesday":
//   case "thursay": //day === 'monday'
//     console.log("Write code examples");
//     break;
//   case "friday": //day === 'monday'
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }
////////////////////////////////////////////////
////////////////////////
// const age = 23;
// age >= 18
//   ? console.log("I like to dring wine ")
//   : console.log("I like to dring water ");

// const drink = age >= 18 ? "wine " : "water ";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
// ////////////////////////////////////
// //Challange #4
// ////////////////////////////////////

// const bill = 275;
// const tipSmall = 0.15;
// const tipBig = 0.2;

// const finishBill =
//   bill >= 50 && bill <= 300 ? bill + bill * tipSmall : bill + bill * tipBig;
// console.log(
//   `The bill was ${bill}, the tip was ${finishBill - bill} and ${finishBill}`
// );
