import { match } from 'tagged-enum'
import { Action, VisibilityFilter } from '../actions'

const visibilityFilter = (
  state = VisibilityFilter.SHOW_ALL,
  action: Action,
) =>
  match(action)({
    SET_VISIBILITY_FILTER: (filter) => filter,
    _: () => state,
  })

export default visibilityFilter
