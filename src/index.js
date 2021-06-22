import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now(), text: action.text }];
    case DELETE_TODO:
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, text: todo });
};

form.addEventListener('submit', onSubmit);
