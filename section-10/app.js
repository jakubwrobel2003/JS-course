`use strict`;
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking(`LH123`);
// createBooking(`LJ123`, 2, 800);
// createBooking(`LJ123`, 2);
// createBooking(`LJ123`, undefined, 2);

// const flight = `LH234`;
// const jonas = {
//   name: 'Jonas Schmidtmann',
//   passport: 2323244,
// };
// const checkIn = function (flight, passport) {
//   flightNum = `LH999`;
//   passport.name = `Mr. ` + passport.name;
//   if (passport.passport === 2323244) {
//     // alert('Check in');
//   } else {
//     // alert(`Wrong passport!`);
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };
// newPassport(jonas);
// console.log(jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

///higher-order fun
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transform string ${fn(str)}`);
  console.log(`Transform by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
