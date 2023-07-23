'use strict';

const textBox = document.getElementById('textbox');
const btnLetter = document.querySelectorAll('.btn-letter');
let clickedLetters = '';
let altActive = false;
let shiftActive = false;
function spaceBtn(text) {
  text = text + ' ';
  return text;
}

function backspaceBtn(text) {
  text = text + ' ';
  return text;
}

function enterBtn(text) {
  text = text + '\n';
  return text;
}

function tabBtn(text) {
  text = text + '    ';
  return text;
}

function altBtn() {
  altActive = !altActive;
  btnLetter.forEach(element => {
    if (element.value === 'alt') element.classList.toggle('btn-active');
  });
  return;
}
function shiftBtn() {
  shiftActive = !shiftActive;
  btnLetter.forEach(element => {
    if (element.value === 'shift') element.classList.toggle('btn-active');
    return;
  });
}
function addLetterFromValue(event) {
  if (event.target.value === 'backspace') {
    clickedLetters = clickedLetters.slice(0, -1);
    textBox.textContent = clickedLetters;
    return;
  }
  if (event.target.value === 'space') {
    clickedLetters = spaceBtn(clickedLetters);
    textBox.textContent = clickedLetters;
    return;
  }
  if (event.target.value === 'enter') {
    clickedLetters = enterBtn(clickedLetters);
    textBox.textContent = clickedLetters;
    return;
  }
  if (event.target.value === 'tab') {
    clickedLetters = tabBtn(clickedLetters);
    textBox.textContent = clickedLetters;
    return;
  }
  if (event.target.value === 'alt') {
    altBtn();
    return;
  }
  if (event.target.value === 'shift') {
    shiftBtn();
    return;
  }
  let letter = event.target.value;
  if (letter == 'e' && altActive) {
    letter = 'ę';
    altBtn();
  }
  if (letter == 'a' && altActive) {
    letter = 'ą';
    altBtn();
  }
  if (letter == 's' && altActive) {
    letter = 'ś';
    altBtn();
  }
  if (letter == 'c' && altActive) {
    letter = 'ć';
    altBtn();
  }
  if (letter == 'n' && altActive) {
    letter = 'ń';
    altBtn();
  }
  if (letter == 'o' && altActive) {
    letter = 'ó';
    altBtn();
  } else {
    altBtn();
  }
  if (shiftActive) {
    letter = letter.toUpperCase();
    shiftBtn();
  }
  clickedLetters += letter;

  console.log(clickedLetters);
  textBox.textContent = clickedLetters;
}

btnLetter.forEach(button => {
  button.addEventListener('click', addLetterFromValue);
});
