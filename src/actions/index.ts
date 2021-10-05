import { Enum } from 'tagged-enum'
let nextTodoId = 0

export const TodoAction = Enum({
  ADD_TODO: (text: string) => ({id: nextTodoId++, text}),
  SET_VISIBILITY_FILTER: (filter: VisibilityFilter) => filter,
  TOGGLE_TODO: (id: number) => id,
})

export type TodoAction = typeof TodoAction.$type$

export const VisibilityFilter = Enum({
  SHOW_ALL: null,
  SHOW_COMPLETED: null,
  SHOW_ACTIVE: null,
})

export type VisibilityFilter = typeof VisibilityFilter.$type$

export type Action = TodoAction | VisibilityFilter