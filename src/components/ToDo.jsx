import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

const ToDo = ({ id, text, onDelBtnClick }) => {
  return (
    <Link to={`/${id}`}>
      <li>
        {text}
        <button onClick={onDelBtnClick}>DEL</button>
      </li>
    </Link>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
