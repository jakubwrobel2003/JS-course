'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovments = function (movements, sort = false) {
  containerMovements.innerHTML = ` `;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = ` 
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      
      <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => (acc += mov));

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const output = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${output * -1}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const username = createUsernames(accounts);

const updateUI = function (acc) {
  displayMovments(acc.movements);

  calcDisplayBalance(acc);

  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log(`login`);

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovments(currentAccount.movements, !sorted);
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// const correctedArr = function (arr) {
//   let x = arr.slice();
//   x.splice(0, 1);
//   x.splice(-2);
//   return x;
// };

// const checkDogs = function (arr) {
//   arr.forEach(function (age, i) {
//     const type = age > 5 ? `an adult` : 'a puppy';
//     console.log(`Dog number ${i + 1} is ${type} and is ${age} years old`);
//   });
// };

// const kateArr = [4, 1, 15, 8, 3];
// const juliaArr = [3, 5, 2, 12, 7];
// const juliaArrCorrected = correctedArr(juliaArr);

// checkDogs([...juliaArrCorrected, ...kateArr]);

// let arr = [`a`, `b`, `c`, `d`, `e`];
// //slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
// //splice
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);
// //reverse
// arr = [`a`, `b`, `c`, `d`, `e`];
// const arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse());
// console.log(arr2);
// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// ///join
// console.log(letters.join('-'));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log(`kuba`.at(0));

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`${i + 1} You withdraw ${Math.abs(movement)}`);
//   }
// }
// console.log(`XDXDXDXDXDXD`);
// movements.forEach(function (move, i, arr) {
//   if (move > 0) {
//     console.log(`${i + 1} You deposited ${move}`);
//   } else {
//     console.log(`${i + 1} You withdraw ${Math.abs(move)}`);
//   }
// });
////
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });
// //set

// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EURO`, `EURO`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}:${value}`);
// });

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);
// // const movementsUSDfor = [];
// // for (const move of movements) movementsUSDfor.push(move * eurToUsd);
// // console.log(movementsUSDfor);
// const movementDescription = movements.map((move, i, arr) => {
//   if (move > 0) {
//     return `${i + 1} You deposited ${move}\n`;
//   } else {
//     return `${i + 1} You withdraw ${Math.abs(move)}\n`;
//   }
// });
// console.log(...movementDescription);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// const withdraw = movements.filter(mov => mov < 0);
// console.log(withdraw);
// console.log(movements);
// const balance = movements.reduce((acc, cur) => acc + cur);
// console.log(balance);
//max value
// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);
// console.log(max);

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })

//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === `Jessica Davis`);
// console.log(account);
// console.log(movements);
// console.log(movements.includes(-130));
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// console.log(movements.every(mov => mov > 0));

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 9];
// console.log(arrDeep.flat(2));

// const overalBalance = accounts
//   .flatMap(acc => acc.movements)

// //   .reduce((acc, mov) => acc + mov, 0);
// // console.log(overalBalance);
// const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
// console.log(owners.sort());
// console.log(owners);
// console.log(movements);
// //return<0,A,B keep order
// //retunr>0,B,A switch order
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// // console.log(movements);
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });

// movements.sort((a, b) => a - b);
// console.log(movements);
// movements.sort((a, b) => b - a);
// console.log(movements);
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// //empty arr +fill method
// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);
// arr.fill(23, 4, 6);
// console.log(arr);

// // array from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener(`click`, function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(`.movements__value`),
//     el => el.textContent.replace(`€`, '')
//   );
//   console.log(movementsUI);
//   const movementsUI2 = [...document.querySelectorAll(`.movements__value`)];
// });

//1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);
//2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sum, cur) => (cur >= 1000 ? sum + 1 : sum), 0);
// console.log(numDeposits1000);

// let a = 10;
// console.log(++a);
// //3
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposit' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposit: 0, withdrawals: 0 }
//   );
// console.log(sums);

// //4

// const convertTitleCase = function (title) {
//   const capitzalize = str => str[0].toUpperCase() + str.slice(1);
//   const excections = [`a`, `an`, 'the', 'but', 'or', `on`, `in`, `with`];
//   const titleCase = title
//     .toLowerCase()
//     .split(` `)
//     .map(word => (excections.includes(word) ? word : capitzalize(word)))
//     .join(' ');
//   return capitzalize(titleCase);
// };

// console.log(convertTitleCase(`a this is a nice title`));
// console.log(convertTitleCase(`this is a LONG title`));
// console.log(convertTitleCase(`this is a nice title and this EXAMPLE`));

//Test data
const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: [`Alice`, `Bob`],
  },
  {
    weight: 8,
    curFood: 200,
    owners: [`Matilda`],
  },
  {
    weight: 13,
    curFood: 275,
    owners: [`Sarah`],
  },
  {
    weight: 32,
    curFood: 340,
    owners: [`Michael`],
  },
];

const dogEatGood = function (dog) {
  if (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  ) {
    return true;
  } else {
    return false;
  }
};

dogs.forEach(function (dog) {
  dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);

  if (dog.owners == dog.owners.includes(`Sarah`)) console.log(`yes`);
});
console.log(dogs);
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

console.log(dogs.some(dog => dog.currFood === dog.recommendedFood));

const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));
console.log(ownersEatTooLittle, ownersEatTooMuch);
console.log(`${ownersEatTooMuch.join(` and `)}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(` and `)}'s dogs eat too little!`);

const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
