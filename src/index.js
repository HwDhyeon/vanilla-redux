import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ id: Date.now(), text: action.text }, ...state];
    case DELETE_TODO:
      return state;
    default:
      return state;
  }
};

const onSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddToDo(toDo);
};

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (event) => {
  const li = event.target.parentNode;
  store.dispatch(deleteToDo(li.id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const button = document.createElement('button');

    li.setAttribute('id', toDo.id);
    li.innerText = toDo.text;
    button.innerText = 'DEL';
    button.addEventListener('click', dispatchDeleteToDo);
    li.appendChild(button);
    ul.appendChild(li);
  });
};

const store = createStore(reducer);
store.subscribe(paintToDos);

form.addEventListener('submit', onSubmit);
