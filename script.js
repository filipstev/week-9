const content = document.querySelector('.content');
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

const saveChanges = (parentColumn, path, saveDiv) => {
  if (path[2].classList[0] === 'card') {
    addCards[parentColumn].style.display = 'flex';
    editInput.style.display = 'none';
    path[2].firstChild.firstChild.innerHTML = editInput.value;
    path[2].style.display = 'flex';
  } else if (path[4].classList[0] === 'card') {
    addCards[parentColumn].style.display = 'flex';
    editInput.style.display = 'none';
    path[4].firstChild.firstChild.innerHTML = editInput.value;
    path[4].style.display = 'flex';
  } else if (path[3].classList[0] === 'card') {
    addCards[parentColumn].style.display = 'flex';
    editInput.style.display = 'none';
    path[3].firstChild.firstChild.innerHTML = editInput.value;
    path[3].style.display = 'flex';
  }
  saveDiv.style.display = 'none';
};

const closeEdit = (path, saveDiv, parentColumn) => {
  if (path[2].classList[0] === 'card') {
    addCards[parentColumn].style.display = 'flex';
    editInput.style.display = 'none';
    path[2].style.display = 'flex';
  } else if (path[4].classList[0] === 'card') {
    addCards[parentColumn].style.display = 'flex';
    editInput.style.display = 'none';
    path[4].style.display = 'flex';
  } else if (path[3].classList[0] === 'card') {
    addCards[parentColumn].style.display = 'flex';
    editInput.style.display = 'none';
    path[3].style.display = 'flex';
  }
  saveDiv.style.display = 'none';
};

const inputEdited = (e) => {
  let parentColumn;

  if (e.path[5].classList[1] === 'column') {
    parentColumn = Number(e.path[5].classList[0].slice(-1)) - 1;
  } else if (e.path[3].classList[1] === 'column') {
    parentColumn = Number(e.path[3].classList[0].slice(-1)) - 1;
  }

  const saveDiv = document.createElement('div');
  saveDiv.classList.add('add-card-bottom');

  const saveButton = document.createElement('div');
  saveButton.classList.add('add-card-button');
  saveButton.innerHTML = 'Save';
  saveButton.addEventListener('click', () =>
    saveChanges(parentColumn, e.path, saveDiv)
  );

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fas');
  closeIcon.classList.add('fa-times');
  closeIcon.addEventListener('click', () =>
    closeEdit(e.path, saveDiv, parentColumn)
  );

  saveDiv.style.display = 'flex';

  saveDiv.appendChild(saveButton);
  saveDiv.appendChild(closeIcon);

  editInput.classList.add('input-add');

  addCard[parentColumn].style.display = 'none';

  if (e.path[2].classList[0] === 'card') {
    columns[parentColumn].insertBefore(editInput, e.path[2]);
    columns[parentColumn].insertBefore(saveDiv, e.path[2]);
    editInput.style.display = 'block';
    editInput.focus();
    editInput.value = e.path[2].firstChild.firstChild.textContent;
    e.path[2].style.display = 'none';
  } else if (e.path[4].classList[0] === 'card') {
    columns[parentColumn].insertBefore(editInput, e.path[4]);
    columns[parentColumn].insertBefore(saveDiv, e.path[4]);
    editInput.style.display = 'block';
    editInput.focus();
    editInput.value = e.path[4].firstChild.firstChild.textContent;
    e.path[4].style.display = 'none';
  } else if (e.path[3].classList[0] === 'card') {
    columns[parentColumn].insertBefore(editInput, e.path[3]);
    columns[parentColumn].insertBefore(saveDiv, e.path[3]);

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

  editInput.style.display = 'none';

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

//------------------------------------------------------

function divAnotherList() {
  let anotherDiv = document.createElement('div');
  anotherDiv.classList.add('make-list');
  anotherDiv.classList.add('light-bg');
  let anotherI = document.createElement('i');
  anotherI.classList.add('fas');
  anotherI.classList.add('fa-plus');
  let anotherSpan = document.createElement('span');
  anotherSpan.innerHTML = 'Add another list';
  anotherSpan.style.marginLeft = '5px';
  anotherDiv.appendChild(anotherI);
  anotherDiv.appendChild(anotherSpan);
  content.appendChild(anotherDiv);
  content.appendChild(createListForm());
}

divAnotherList();

function createListForm() {
  let form = document.createElement('div');
  form.classList.add('form');
  let formInput = document.createElement('input');
  formInput.placeholder = 'Enter list title...';
  formInput.classList.add('list-form-input');
  let listBottomDiv = document.createElement('div');
  listBottomDiv.classList.add('make-list-bottom');
  let addListButton = document.createElement('div');
  addListButton.innerHTML = 'Add list';
  let closeList = document.createElement('i');
  closeList.classList.add('fas');
  closeList.classList.add('fa-times');
  listBottomDiv.appendChild(addListButton);
  listBottomDiv.appendChild(closeList);
  form.appendChild(formInput);
  form.appendChild(listBottomDiv);
  return form;
}

function closeForm(hide, show) {
  hide.style.display = 'none';
  show.style.display = '';
}

var makeList = document.querySelector('.make-list');
var formDiv = document.querySelector('.form');

makeList.addEventListener('click', () => {
  makeList.style.display = 'none';
  formDiv.style.display = 'flex';
});

formDiv.lastChild.lastChild.addEventListener('click', () => {
  closeForm(formDiv, makeList);
});

formDiv.lastChild.firstChild.addEventListener('click', () => {
  let listInputTitle = document.querySelector('.list-form-input').value;
  if (listInputTitle != '') {
    makeList.parentNode.insertBefore(
      createAnotherList(listInputTitle),
      makeList
    );
  }
});

const addCardNewList = (e, addCard, addCardBottom, card, columnDiv) => {
  if ((editInput.style.display = '')) {
    editInput.style.display = 'none';
  }

  editInput.style.display = 'none';

  input.style.display = 'block';
  input.classList.add('input-add');
  const inputVal = input.value;

  const noviDiv = document.createElement('div');
  noviDiv.appendChild(input);

  addCard.style.display = 'none';
  addCardBottom.style.display = 'flex';

  card.classList.toggle('card-add');
  columnDiv.insertBefore(noviDiv, addCard);
};

const showCardNewList = (e, card, columnDiv, addCard, addCardBottom) => {
  const inputVal = input.value;
  if (inputVal === '') {
    input.style.display = 'none';
    addCardBottom.style.display = 'none';
    addCard.style.display = 'flex';
    return;
  }
  input.value = '';

  const inputItem = document.createElement('div');
  inputItem.classList.add('input-item');

  inputItem.innerHTML = inputVal;

  input.style.display = 'none';
  addCardBottom.style.display = 'none';
  addCard.style.display = 'flex';

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

  cardRightDiv.addEventListener('click', (e) =>
    inputEditedNewList(e, addCard, columnDiv)
  );

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

  cardDiv.style.display = 'flex';

  columnDiv.insertBefore(cardDiv, addCard);
};

const saveChangesNewList = (parentColumn, path, saveDiv, addCard) => {
  if (path[2].classList[0] === 'card') {
    addCard.style.display = 'flex';
    editInput.style.display = 'none';
    path[2].firstChild.firstChild.innerHTML = editInput.value;
    path[2].style.display = 'flex';
  } else if (path[4].classList[0] === 'card') {
    addCard.style.display = 'flex';
    editInput.style.display = 'none';
    path[4].firstChild.firstChild.innerHTML = editInput.value;
    path[4].style.display = 'flex';
  } else if (path[3].classList[0] === 'card') {
    addCard.style.display = 'flex';
    editInput.style.display = 'none';
    path[3].firstChild.firstChild.innerHTML = editInput.value;
    path[3].style.display = 'flex';
  }
  saveDiv.style.display = 'none';
};

const closeEditNewList = (path, saveDiv, parentColumn, addCard) => {
  if (path[2].classList[0] === 'card') {
    addCard.style.display = 'flex';
    editInput.style.display = 'none';
    path[2].style.display = 'flex';
  } else if (path[4].classList[0] === 'card') {
    addCard.style.display = 'flex';
    editInput.style.display = 'none';
    path[4].style.display = 'flex';
  } else if (path[3].classList[0] === 'card') {
    addCard.style.display = 'flex';
    editInput.style.display = 'none';
    path[3].style.display = 'flex';
  }
  saveDiv.style.display = 'none';
};

const inputEditedNewList = (e, addCard, columnDiv) => {
  const saveDiv = document.createElement('div');
  saveDiv.classList.add('add-card-bottom');
  console.log(addCard);

  const saveButton = document.createElement('div');
  saveButton.classList.add('add-card-button');
  saveButton.innerHTML = 'Save';
  saveButton.addEventListener('click', () =>
    saveChangesNewList(columnDiv, e.path, saveDiv, addCard)
  );

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fas');
  closeIcon.classList.add('fa-times');
  closeIcon.addEventListener('click', () =>
    closeEditNewList(e.path, saveDiv, columnDiv, addCard)
  );

  saveDiv.style.display = 'flex';

  saveDiv.appendChild(saveButton);
  saveDiv.appendChild(closeIcon);

  editInput.classList.add('input-add');

  addCard.style.display = 'none';

  if (e.path[2].classList[0] === 'card') {
    columnDiv.insertBefore(editInput, e.path[2]);
    columnDiv.insertBefore(saveDiv, e.path[2]);
    editInput.style.display = 'block';
    editInput.focus();
    editInput.value = e.path[2].firstChild.firstChild.textContent;
    e.path[2].style.display = 'none';
  } else if (e.path[4].classList[0] === 'card') {
    columnDiv.insertBefore(editInput, e.path[4]);
    columnDiv.insertBefore(saveDiv, e.path[4]);
    editInput.style.display = 'block';
    editInput.focus();
    editInput.value = e.path[4].firstChild.firstChild.textContent;
    e.path[4].style.display = 'none';
  } else if (e.path[3].classList[0] === 'card') {
    columnDiv.insertBefore(editInput, e.path[3]);
    columnDiv.insertBefore(saveDiv, e.path[3]);

    editInput.style.display = 'block';
    editInput.focus();
    editInput.value = e.path[3].firstChild.firstChild.textContent;
    e.path[3].style.display = 'none';
  }
};

const closeInputNewList = (e, addCard, addCardBottom) => {
  input.value = '';
  input.style.display = 'none';
  addCardBottom.style.display = 'none';
  addCard.style.display = 'flex';
  return;
};

function createAnotherList(title) {
  document.querySelector('.list-form-input').value = '';
  document.querySelector('.list-form-input').focus();

  let columnDiv = document.createElement('div');
  columnDiv.classList.add('column');

  let listTitle = document.createElement('div');
  listTitle.classList.add('list-title');
  let titleDiv = document.createElement('div');
  titleDiv.innerHTML = title;
  let linkPoints = document.createElement('a');
  let points = document.createElement('i');
  points.classList.add('fas');
  points.classList.add('fa-ellipsis-h');
  linkPoints.appendChild(points);
  listTitle.appendChild(titleDiv);
  listTitle.appendChild(linkPoints);

  let card = document.createElement('div');
  card.classList.add('card');
  let cardLeftPart = document.createElement('div');
  cardLeftPart.classList.add('card-left-part');
  let cardRightPart = document.createElement('div');
  cardRightPart.classList.add('card-right-part');
  let divLeft = document.createElement('div');
  let alignIcon = document.createElement('i');
  alignIcon.classList.add('fas');
  alignIcon.classList.add('fa-align-left');
  divLeft.appendChild(alignIcon);
  cardLeftPart.appendChild(divLeft);
  let linkPencil = document.createElement('a');
  let linkSpan = document.createElement('span');
  let linkI = document.createElement('i');
  linkI.classList.add('fas');
  linkI.classList.add('fa-pencil-alt');
  linkSpan.appendChild(linkI);
  linkPencil.appendChild(linkSpan);
  cardRightPart.appendChild(linkPencil);
  card.appendChild(cardLeftPart);
  card.appendChild(cardRightPart);

  let addCard = document.createElement('div');
  addCard.classList.add('add-card');
  let addBtn = document.createElement('div');
  addBtn.classList.add('add-button');
  let iPlus = document.createElement('i');
  iPlus.classList.add('fas');
  iPlus.classList.add('fa-plus');
  let spanText = document.createElement('span');
  spanText.innerHTML = 'Add a card';
  addBtn.appendChild(iPlus);
  addBtn.appendChild(spanText);
  let linkTemp = document.createElement('a');
  let iTemp = document.createElement('i');
  iTemp.classList.add('fas');
  iTemp.classList.add('fa-pager');
  linkTemp.appendChild(iTemp);
  addCard.appendChild(addBtn);
  addCard.appendChild(linkTemp);

  let addCardBottom = document.createElement('div');
  addCardBottom.classList.add('add-card-bottom');
  let addCardButton = document.createElement('div');
  addCardButton.classList.add('add-card-button');
  addCardButton.innerHTML = 'Add Card';
  let iClose = document.createElement('i');
  iClose.classList.add('fas');
  iClose.classList.add('fa-times');
  addCardBottom.appendChild(addCardButton);
  addCardBottom.appendChild(iClose);

  iClose.addEventListener('click', (e) =>
    closeInputNewList(e, addCard, addCardBottom)
  );

  addCardButton.addEventListener('click', (e) =>
    showCardNewList(e, card, columnDiv, addCard, addCardBottom)
  );
  addBtn.addEventListener('click', (e) =>
    addCardNewList(e, addCard, addCardBottom, card, columnDiv)
  );

  columnDiv.appendChild(listTitle);
  columnDiv.appendChild(card);
  columnDiv.appendChild(addCard);
  columnDiv.appendChild(addCardBottom);

  return columnDiv;
}
