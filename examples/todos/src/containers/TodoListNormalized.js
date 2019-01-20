import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoListNormalized from "../components/TodoListNormalized";

const getNormalizedTodoIds = state => {
  return state.todosNormalized.allIds;
};

const mapStateToProps = state => ({
  todoIds: getNormalizedTodoIds(state),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListNormalized);
