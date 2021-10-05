import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList: FC<{
  todos: Array<{
    id: number,
    completed: boolean,
    text: string,
  }>,
  toggleTodo: (id: number) => void
}> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
