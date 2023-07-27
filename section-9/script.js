'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //jak jest nazwa taka sama to wystarczytylo to
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
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
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)
// // console.log('a+very+nice+string'.split('+'));
// // console.log(`Jonas Schmedtmann`.split(' '));
// const getCode = str => str.slice(0, 3).toUpperCase();
// console.log(flights.split('+'));
// for (const flight of flights.split('+')) {
//   let [status, from, to, time] = flight.split(';');
//   const output = `${status.slice(1)} from ${getCode(from)} to ${getCode(
//     to
//   )} (${time.replace(':', 'h')})`.padStart(20, 'o');
//   console.log(output);
// }

// const [firstName, lastName] = `Jonas Schmedtmann`.split(' ');

// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
// const capitalationName = function (names) {
//   names = names.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalationName(`jesssica ann smith davis`);
// capitalationName(`kuba wrobel`);

// //padding
// const message = `Go to get 23!`;
// console.log(message.padStart(25, `+`).padEnd(35, '+'));
// console.log('kuba'.padEnd(23, '='));

// const maskCreditCard = function (number) {
//   const str = String(number);
//   // console.log(str.slice(-4).padStart(str.length - 4, '*'));
//   return str.slice(-4).padStart(str.length - 4, '*');
// };
// console.log(maskCreditCard(4334423535212344));
// console.log(maskCreditCard('343241515151541414341'));

// //repeat
// const message2 = 'Bad waether... All Departures Deleyed... ';
// console.log(message2.repeat(5));
// const planeInLine = function (n) {
//   console.log(`There are${n} planes in line  ${`XD`.repeat(n)}`);
// };
// planeInLine(6);
// planeInLine(4);
//STRING
// const airline = `TAB Air Portugal`;
// const plane = 'A320';

// console.log(plane[0]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('b737'.length);
// console.log(airline.indexOf(`r`));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));
// console.log(airline.slice(-2));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('you got the middle seat ');
// };

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3B`);

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());
// // fix capitalation name
// const passenger = 'jOnas';
// const passengerl = passenger.toLowerCase();
// const passengerCorrect = passengerl[0].toUpperCase() + passengerl.slice(1);
// console.log(passengerCorrect);

// //check email
// const email = 'hello@jonas.io';
// const loginEmail = 'hello@jonas.io\n';
// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);
// const normalzeEmail = loginEmail.toLowerCase().trim();
// console.log(normalzeEmail);
// console.log(email == normalzeEmail);
// ///replece
// const priceGB = '288,97#';
// const priceUS = priceGB.replace('#', '$').replace(',', '.');
// console.log(priceUS);
// const annoucement = 'All passengers come to baring door 23. bordfing door 23!';
// console.log(annoucement.replaceAll('door', 'gate'));

// console.log(annoucement.replace(/door/g, 'gate'));

// //bolean
// const plane2 = ' Air A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));
// console.log(plane2.startsWith('Air'));
// if (plane2.startsWith(`Airbus`) && plane2.endsWith('neo')) {
//   console.log('Part of the New Airbus familly');
// }
// //prascice
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('Call to police');
//   } else console.log(`Welcone abord!`);
// };
// checkBaggage(`Socks and camera`);
// checkBaggage(`Socks and gun for protecton`);
// checkBaggage(`I have knife`);
// //chalange
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = new Set([...gameEvents.values()]);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(events);
// const gameEventsSize = gameEvents.size;
// console.log(
//   `An event happened, on average, every ${90 / gameEventsSize} minutes`
// );
// for (const [key, value] of gameEvents) {
//   if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
//   else console.log(`[SECOND HALF] ${key}: ${value}`);
// }
// const question = new Map([
//   ['question', 'What is the best programing langueage in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'javaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// //covert object to map
// console.log(...Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// ///quiz app
// console.log(question.get('question'));
// for (const [key, values] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${values}`);
// }
// // const answer = Number(prompt('Your answer'));
// // console.log(answer);
// const answer = 3;
// console.log(question.get(question.get('correct') === answer));

// ///covert map to arr
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);
///////////////////////////////
// /////////////////////
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet[0]);
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);
// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(...staffUnique);
// console.log(new Set(staff).size);
// console.log(new Set(`kubawrobel`).size);
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [numberOfGoal, player] of game.scored.entries()) {
//   console.log(`${player} was scored ${parseInt(numberOfGoal) + 1} goal`);
// }
// //2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// console.log(average);
// average /= odds.length;
// console.log(average);
// //
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `we are open on ${properties.length}`;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// // properties Values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //wth optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day} we open at ${open}`);
// }

// //methot
// console.log(restaurant.order?.(0, 1) ?? 'Method dpes not exist');
// //methot
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method dpes not exist');

// // arrays;
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const user = [];
// console.log(users[0]?.name ?? 'User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} ${el}`);
// }
// console.log(...menu.entries());
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //2
// const [gp, ...fildPlayers] = players1;
// console.log(gp, fildPlayers);
// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);
// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);
// //7
// team1 < team2 && console.log('team 1 is more likely to win');
// team1 > team2 && console.log('team 2 is more likely to win');
// rest2.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

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
