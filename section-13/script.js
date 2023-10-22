'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('.header');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////
////////////////////
///////////////
// console.log(document.documentElement);

// document.querySelector(`.header`);
// const allSection = document.querySelectorAll(`.section`);
// console.log(allSection);
// document.getElementById(`#section--1`);
// // tagname na bierzoco strawdza
// const allbtn = document.getElementsByTagName(`button`);
// console.log(allbtn);
// console.log(document.getElementsByClassName('btn'));

//creating and inserting element

// // .insertAdjeacentHTML

// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);

// // message.textContent = `We use cookied for improved functionality and analytics`;
// message.innerHTML =
//   'We use cookied for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // delete element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });
// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// //zwiekszanie wyskoscie
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty(`--color-primary`, 'orangered');
// //atributes
// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = 'Beatyful minimalist logo';
// //not sandart
// console.log(logo.designer);
// console.log(logo.getAttribute(`designer`));

// console.log(logo.src);
// console.log(logo.getAttribute(`src`));

// const link = document.querySelector(`.nav__link`);
// console.log(link.href);
// console.log(link.getAttribute(`href`));

// //data attribute
// console.log(logo.dataset.versionNumber);
// //classes
// logo.classList.add(`c`);
// logo.classList.remove(`c`);
// logo.classList.toggle(`c`);
// logo.classList.contains(`c`);

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);
  console.log(e.target.getBoundingClientRect());
  console.log(`current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);
  console.log(
    `height/width`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );
  // oldschool
  // window.scrollTo({
  //   letf: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////
/////////////////
// const h1 = document.querySelector('h1');
// //old
// const alertH1 = function (e) {
//   alert(`addevent`);
// };
// // h1.onmouseenter = function (e) {
// //   alert(`onmouse`);
// // };

// h1.addEventListener(`mouseenter`, alertH1);
// setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 3000);
// //rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min - 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`Link`, e.target, e.currentTarget);
  console.log(e.currentTarget == this);

  //stop propagation
  // e.stopPropagation();
});

document.querySelector(`.nav`).addEventListener(
  `click`,
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log(`Link2`, e.target, e.currentTarget);
    console.log(e.currentTarget == this);
  },
  true
);

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`Link23`, e.target, e.currentTarget);
  console.log(e.currentTarget == this);
});
