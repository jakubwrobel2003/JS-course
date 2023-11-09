'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector(`.nav`);
///////////////////////////////////////
// Modal window

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
////////////////////////////////////////////////////////
//btn nav

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
//tab components

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add(`operations__tab--active`);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////
// page nave

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//1. Add event lisner  to common parent element
//2. Determine what

document.querySelector(`.nav__links`).addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
/////

//Menu fade animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener(`mouseover`, function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener(`mouseout`, function (e) {
  handleHover(e, 1);
});

// ////mav
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   console.log(this.window.scrollY);
//   if (this.window.scrollY > initialCoords.top) nav.classList.add(`sticky`);
//   else nav.classList.remove(`sticky`);
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   thershold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserwer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserwer.observe(header);
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

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min - 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Link`, e.target, e.currentTarget);
//   console.log(e.currentTarget == this);

//stop propagation
// e.stopPropagation();
// });

// document.querySelector(`.nav`).addEventListener(
//   `click`,
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(`Link2`, e.target, e.currentTarget);
//     console.log(e.currentTarget == this);
//   },
//   true
// );

// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Link23`, e.target, e.currentTarget);
//   console.log(e.currentTarget == this);
// });

// const h1 = document.querySelector(`h1`);
// //goint downward:child
// console.log(h1.querySelectorAll(`.highlight`));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'green';

// //going upwards:parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = `scale(0.5)`;
//   }
// });
