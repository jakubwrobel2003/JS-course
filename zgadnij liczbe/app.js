const btnPlay = document.getElementById('button-number');
const yourNumber = document.getElementById('choose-number');
const missPoint = document.getElementById('miss').value;
const infoText = document.getElementById('info');
let losePoint = 0;
let randomNumber = Math.floor(Math.random(1, 50) * 50 + 1);

console.log(randomNumber);

btnPlay.addEventListener('click', function () {
  let printnumber = yourNumber.value;
  console.log(printnumber);

  if (randomNumber == printnumber) infoText.textContent = 'Win';
  else if (randomNumber > printnumber) {
    infoText.textContent = 'Za mało';
    losePoint = losePoint + 1;
    console.log(losePoint);
  } else {
    infoText.textContent = 'Za dużo';
    losePoint = losePoint + 1;
    console.log(losePoint);
  }
});
