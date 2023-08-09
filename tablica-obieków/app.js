`use strict`;
const nameBtn = document.querySelector(`#name`);
const surnameBtn = document.querySelector(`#surname`);
const sexbtn = document.querySelector(`#sex`);
const submitBtn = document.querySelector(`#submit`);
const data = [];
submitBtn.addEventListener(`click`, function () {
  const personObj = {};
  nameBtn.value == ``
    ? (personObj.name = undefined)
    : (personObj.name = undefined = nameBtn.value);
  surnameBtn.value == ``
    ? (personObj.surname = undefined)
    : (personObj.surname = undefined = surnameBtn.value);
  personObj.sex = sexbtn.checked ? 'Mężczyzna' : 'Kobieta';
  data.push(personObj);
  console.log(data);
});
console.log(data);
