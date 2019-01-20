import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import Todo from "../components/Todo";

const getNormalizedTodo = (state, id) => {
  return state.todosNormalized.byId[id];
};

const mapStateToProps = (state, ownProps) => ({
  ...getNormalizedTodo(state, ownProps.id),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
