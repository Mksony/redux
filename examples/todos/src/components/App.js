import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoListNormalized from '../containers/TodoListNormalized';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoListNormalized />
    <Footer />
  </div>
)

export default App
