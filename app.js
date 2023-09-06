const num = [2, 7, 11, 15];
const target = 9;
const x = 'III';

const twoSum = function (x) {
  const RomanNumber = [];
  let y = 0;
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);

    if (x[i] == 'M') {
      RomanNumber.push(1000);
    }
    if (x[i] == 'D') {
      RomanNumber.push(500);
    }
    if (x[i] == 'C') {
      RomanNumber.push(100);
    }
    if (x[i] == 'L') {
      RomanNumber.push(50);
    }
    if (x[i] == 'X') {
      RomanNumber.push(10);
    }
    if (x[i] == 'V') {
      RomanNumber.push(5);
    }
    if (x[i] == 'I') {
      RomanNumber.push(1);
    }

    console.log(RomanNumber);
  }
  RomanNumber.push(0);
  for (let i = 0; i < RomanNumber.length + 1; i++) {
    if (RomanNumber[i] >= RomanNumber[i + 1]) {
      y = y + RomanNumber[i];
    }
    if (RomanNumber[i] < RomanNumber[i + 1]) {
      y = y + (RomanNumber[i + 1] - RomanNumber[i]);
      i = i + 1;
    }
  }
  console.log(y);
  return y;
};

console.log(twoSum(x));
