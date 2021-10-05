import React, { FC } from 'react'
import PropTypes from 'prop-types'

const Todo: FC<{
  onClick: () => void,
  completed: boolean,
  text: string,
}> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
