import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          text: action.text,
          completed: false
        }
      };
    case 'TOGGLE_TODO': {
      const todo = state[action.id];
      return {
        ...state,
        [action.id]: {
          ...todo,
          completed: !todo.completed
        }
      }
    }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}

export default combineReducers({
  byId,
  allIds,
})
