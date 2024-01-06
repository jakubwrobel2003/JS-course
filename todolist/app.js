`use strict`;
const mains = document.querySelectorAll(`section`);
const ideaContainer = document.querySelector(`.idea`);

const btnCreate = document.querySelector(`.btn-create`);
const inputTitle = document.querySelector(`.title-input`);
const inputInfo = document.querySelector(`.info-input`);
const btnPrev = document.querySelector(`.btn-prev`);
const btnNext = document.querySelector(`.btn - next`);
let id = 0;
btnCreate.addEventListener(`click`, function () {
  if (inputInfo.value == '' || inputTitle.value == '') {
  } else {
    ideaContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="todobox" id="${i}" >
      <p class="title">${inputTitle.value}</p>
      <p class="task-info">${inputTitle.value}</p>
     
      <button class="btn-prev">Delete</button>
      <button class="btn-next">Next</button>
    </div>`
    );
    inputInfo.value = inputTitle.value = '';
  }
});
btnNext.addEventListener(`click`, function () {
  const data = btnNext.outerHTML;
  const btnNextParent = btnNext.parentNode;
  if (btnNext.parentNode.parentNode.classList != 'finish') {
  } else {
  }
});
