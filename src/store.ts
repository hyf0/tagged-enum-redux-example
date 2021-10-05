import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createStore } from "redux";
import { Action } from "./actions";
import rootReducer from './reducers'
export const store = createStore(rootReducer)

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return dispatch as <T extends Action>(action: T) => T
}

export const useAppStateSelector = <T>(selector: (state: ReturnType<typeof store.getState>) => T ): T => useSelector(selector, shallowEqual)