import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { TodoAction, VisibilityFilter } from '../actions'
import React, { FC } from 'react'
import { match } from 'tagged-enum'
import { useAppDispatch, useAppStateSelector } from '../store'

const getVisibleTodos = (todos: Array<{
  id: number,
  completed: boolean,
  text: string,
}>, filter: VisibilityFilter) => match(filter)({
  SHOW_ALL: () => todos,
  SHOW_COMPLETED: () => todos.filter(t => t.completed),
  SHOW_ACTIVE: () => todos.filter(t => !t.completed),
  _: () => { throw new Error('Unknown filter: ' + filter) }
})

const VisibleTodoList: FC = () => {
  const {todos, visibilityFilter} = useAppStateSelector(s => s)
  const dispatch = useAppDispatch()
  const toggleTodo = (id: number) => dispatch(TodoAction.TOGGLE_TODO(id))
  return <TodoList todos={getVisibleTodos(todos, visibilityFilter)} toggleTodo={toggleTodo} />
}
export default VisibleTodoList
