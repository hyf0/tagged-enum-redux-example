import { match } from "tagged-enum"
import { Action } from "../actions"



const todos = (state = [] as Array<{
  id: number,
  completed: boolean,
  text: string,
}>, action: Action) => match(action)({
  ADD_TODO: ({ id, text }) => [
    ...state,
    {
      id,
      text,
      completed: false
    }
  ],
  TOGGLE_TODO: (id) => state.map(todo =>
    (todo.id === id)
      ? { ...todo, completed: !todo.completed }
      : todo
  ),
  _: () => state,
});

export default todos
