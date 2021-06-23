import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(text);
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
      <ul></ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    toDos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
