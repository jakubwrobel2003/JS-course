'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicius pastya with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest2.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
//use Any data typr, return Any data type short-circuteing
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23);

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);
// console.log('-----AND------');
// console.log(0 && 'Jonas');
// console.log(4 && 'Jonas');
// console.log(undefined && 0 && '' && 'hello' && 23);
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('grzyby', 'szpinah');
// }
// restaurant.orderPizza && restaurant.orderPizza('grzyby', 'szpinah');
// ///derstucting
// // spread bo z prawej
// const arr = [1, 2, ...[3, 4]];
// // rest bo po proawej
// const [a, b, ...other] = [1, 2, 3, 4, 5];

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) function
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 3, 7, 2, 5, 3, 7, 2);
// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('Grzyby', 'jajka', 'piwo');
// restaurant.orderPizza('pizza');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy arr
// const mainMenuCopy = [...restaurant.mainMenu];
// // goin 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// //Iterables: arrys strings map sets. Not object
// const str = 'Jonas';
// const letter = [...str, ' ', 'S.'];
// console.log(letter);
// console.log(...str);

// const ingredients = [
//   // prompt(`let's make pasta! ingredients 1?`),
//   // prompt(`let's make pasta! ingredients 2?`),
//   // prompt(`let's make pasta! ingredients 3?`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);
// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristoranete Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// // destruction object
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole,21',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //nutatingh variable
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nestet object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// destruction arry
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// // switchng variable
// // const temp = main;
// // main = second;
// // second = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [sarter, mainCourse] = restaurant.order(2, 0);
// console.log(sarter, main);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// // default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
