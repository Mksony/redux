import { combineReducers } from 'redux'
import todos from './todos'
import todosNormalized from './todosNormalized';
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  todosNormalized

})
