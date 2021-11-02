const card = document.querySelectorAll('.card');
const addButton = document.querySelectorAll('.add-button');
const cardLeftPart = document.querySelectorAll('.card-left-part');
const addCard = document.querySelectorAll('.add-card');
const addCardBottom = document.querySelectorAll('.add-card-bottom');
const addCardButton = document.querySelectorAll('.add-card-button');
const column = document.querySelectorAll('.column');
const closeItem = document.querySelectorAll('.fa-times');

const closeButtons = [];
const columns = [];
const addCardButtons = [];
const addCardBottoms = [];
const addCards = [];
const cardLeftNiz = [];
const cards = [];

column.forEach((column) => {
  columns.push(column);
});

addCardButton.forEach((button) => {
  addCardButtons.push(button);
});

addCardBottom.forEach((addCardBottom) => {
  addCardBottoms.push(addCardBottom);
});

addCard.forEach((addCard) => {
  addCards.push(addCard);
});

card.forEach((card) => {
  cards.push(card);
});

cardLeftPart.forEach((cardLeft) => {
  cardLeftNiz.push(cardLeft);
});

const input = document.createElement('textarea');
const editInput = document.createElement('textarea');

const inputEdited = (e) => {
  let parentColumn;

  if (e.path[5].classList[1] === 'column') {
    parentColumn = Number(e.path[5].classList[0].slice(-1)) - 1;
  } else if (e.path[3].classList[1] === 'column') {
    parentColumn = Number(e.path[3].classList[0].slice(-1)) - 1;
  }

  editInput.classList.add('input-add');

  if (e.path[2].classList[0] === 'card') {
    columns[parentColumn].insertBefore(editInput, e.path[2].classList[0]);

    editInput.style.display = 'block';
    editInput.focus();
    editInput.value = e.path[2].firstChild.firstChild.textContent;
    e.path[2].style.display = 'none';
  } else if (e.path[4].classList[0] === 'card') {
    columns[parentColumn].insertBefore(editInput, e.path[4].classList[0]);

    editInput.style.display = 'block';
    editInput.focus();
    editInput.value = e.path[4].firstChild.firstChild.textContent;
    e.path[4].style.display = 'none';
  } else if (e.path[3].classList[0] === 'card') {
    columns[parentColumn].insertBefore(editInput, e.path[3].classList[0]);

    editInput.style.display = 'block';
    editInput.focus();
    editInput.value = e.path[3].firstChild.firstChild.textContent;
    e.path[3].style.display = 'none';
  }
};

const closeInput = (e) => {
  let parentColumn;

  if (e.path[2].classList[1] === 'column') {
    parentColumn = Number(e.path[2].classList[0].slice(-1)) - 1;
  } else {
    parentColumn = Number(e.path[3].classList[0].slice(-1)) - 1;
  }
  input.value = '';
  input.style.display = 'none';
  addCardBottoms[parentColumn].style.display = 'none';
  addCards[parentColumn].style.display = 'flex';
  return;
};

closeItem.forEach((close) => {
  close.addEventListener('click', closeInput);
  closeButtons.push(close);
});

const addingCard = (e) => {
  if ((editInput.style.display = '')) {
    editInput.style.display = 'none';
  }

  console.log(e);
  input.style.display = 'block';
  input.classList.add('input-add');
  const inputVal = input.value;
  let parentColumn;

  if (e.path[2].classList[1] === 'column') {
    parentColumn = Number(e.path[2].classList[0].slice(-1)) - 1;
  } else {
    parentColumn = Number(e.path[3].classList[0].slice(-1)) - 1;
  }

  const noviDiv = document.createElement('div');
  noviDiv.appendChild(input);

  addCard[parentColumn].style.display = 'none';
  addCardBottoms[parentColumn].style.display = 'flex';

  //   cards[parentColumn].style.display = 'block';
  cards[parentColumn].classList.toggle('card-add');
  columns[parentColumn].insertBefore(noviDiv, addCards[parentColumn]);

  console.log(inputVal);
};

const showCard = (e) => {
  let parentColumn;

  if (e.path[2].classList[1] === 'column') {
    parentColumn = Number(e.path[2].classList[0].slice(-1)) - 1;
  } else {
    parentColumn = Number(e.path[3].classList[0].slice(-1)) - 1;
  }

  const inputVal = input.value;
  if (inputVal === '') {
    input.style.display = 'none';
    addCardBottoms[parentColumn].style.display = 'none';
    addCards[parentColumn].style.display = 'flex';
    return;
  }
  input.value = '';

  const inputItem = document.createElement('div');
  inputItem.classList.add('input-item');

  inputItem.innerHTML = inputVal;

  input.style.display = 'none';
  addCardBottoms[parentColumn].style.display = 'none';
  addCards[parentColumn].style.display = 'flex';

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  const cardLeftDiv = document.createElement('div');
  cardLeftDiv.classList.add('card-left-part');
  const cardPlusDiv = document.createElement('div');
  const cardPlusIcon = document.createElement('i');
  cardPlusIcon.classList.add('fas');
  cardPlusIcon.classList.add('fa-align-left');
  const cardRightDiv = document.createElement('div');
  cardRightDiv.classList.add('card-right-part');
  const cardRightA = document.createElement('a');
  const cardRightSpan = document.createElement('span');
  const cardRightIcon = document.createElement('i');

  cardRightDiv.addEventListener('click', inputEdited);

  cardRightIcon.classList.add('fas');
  cardRightIcon.classList.add('fa-pencil-alt');

  cardLeftDiv.appendChild(inputItem);

  cardPlusDiv.appendChild(cardPlusIcon);
  cardLeftDiv.appendChild(cardPlusDiv);
  cardDiv.appendChild(cardLeftDiv);

  cardRightSpan.appendChild(cardRightIcon);
  cardRightA.appendChild(cardRightSpan);
  cardRightDiv.appendChild(cardRightA);
  cardDiv.appendChild(cardRightDiv);

  console.log(cardDiv);
  cardDiv.style.display = 'flex';

  columns[parentColumn].insertBefore(cardDiv, addCards[parentColumn]);
};

addButton.forEach((button) => {
  button.addEventListener('click', addingCard);
});

addCardButton.forEach((button) => {
  button.addEventListener('click', showCard);
});
