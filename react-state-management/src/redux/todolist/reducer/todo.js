import { ADD, DEL, LOAD} from "../action/todo"


const initState = {
    todos: []
  }
  
  //reducer function
  export const todoReducer = (state = initState, action) => {
    switch (action.type) {
      case ADD:
        const {id, todo} = action.payload
        return{
          ...state,
          todos: [
            ...state.todos, 
            {
              id: id, 
              todo: todo
            }
          ]
        }
      case DEL:
        const afterDelete = state.todos.filter(item => item.id !== action.payload)
        return{
          ...state,
          todos: afterDelete
        }

        case LOAD:
          return {
            ...state,
            todo:action.payload
          };
      default:
        return state;
    }
  }
  