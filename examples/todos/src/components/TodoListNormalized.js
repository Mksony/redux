import React from "react";
import PropTypes from "prop-types";
import Todo from "../containers/TodoNormalized";

const TodoList = ({ todoIds, toggleTodo }) => (
  <ul>
    {todoIds.map(id => (
      <Todo key={id} onClick={() => toggleTodo(id)} id={id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
