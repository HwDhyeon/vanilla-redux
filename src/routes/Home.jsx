import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
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

export default Home;