import {ADD, DEL, LOAD} from "./type"
import axios from "axios"

const URL = "http://localhost:3006/todos"
//Actions
export const addTodo = async(dispatch, todo) => {
  axios.post(URL, todo)
  dispatch ({
    type: ADD,
    payload: {
      id: Math.random().toString(),
      todo: todo
    }
  })

}

export const delTodo = async (dispatch, id) => {
  axios.delete(URL,id)
  dispatch ({
    type: DEL,
    payload:id
  })
  
}

export const loadData = async(dispatch) =>{
  const res = await axios.get(URL)
    await dispatch({
      type: LOAD,
      payload: res.data,
      
    });
}