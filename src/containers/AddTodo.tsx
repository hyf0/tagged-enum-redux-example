import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useAppDispatch } from '../store'
import { TodoAction } from '../actions'

const AddTodo = () => {
  const dispatch = useAppDispatch()
  const [input, setInput] = useState('')

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.trim()) {
          return
        }
        dispatch(TodoAction.ADD_TODO(input))
        setInput('')
      }}>
        <input value={input} onChange={evt => setInput(evt.target.value)} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
