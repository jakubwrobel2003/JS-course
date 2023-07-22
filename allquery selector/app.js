'use strict';

const textBox = document.getElementById('textbox');
const btnLetter = document.querySelectorAll('.btn-letter');
let clickedLetters = '';

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

  const letter = event.target.textContent;
  clickedLetters += letter;
  console.log(clickedLetters);
  textBox.textContent = clickedLetters;
}

btnLetter.forEach(button => {
  button.addEventListener('click', addLetterFromValue);
});
