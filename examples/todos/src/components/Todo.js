import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component {
  render() {
    const { onClick, completed, text } = this.props;
    console.log('render')
    return <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
