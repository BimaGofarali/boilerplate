import {combineReducers} from "redux"
// import { counterReducer } from "./counter/counterReducer"
import {todoReducer} from "./todolist/reducer/todo"

const rootReducer = combineReducers({
  // count: counterReducer,
  todos: todoReducer
})

export default rootReducer