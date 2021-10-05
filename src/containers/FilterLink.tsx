import React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'
import { TodoAction, VisibilityFilter } from '../actions'
import Link from '../components/Link'
import { useAppDispatch, useAppStateSelector } from '../store'

const FilterLink: FC<{ filter: VisibilityFilter }> = ({ filter, children }) => {
  const visibilityFilter = useAppStateSelector((s) => s.visibilityFilter)
  const dispatch = useAppDispatch()
  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => dispatch(TodoAction.SET_VISIBILITY_FILTER(filter))}
    >
      {children}
    </Link>
  )
}

export default FilterLink
