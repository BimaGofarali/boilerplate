import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux' //ini useDispatch dan useSelector dari react-redux
import {addTodo, delTodo} from "./action/todo"
//Actions Constant


//initial stata /kondisi awal -> ketika object di load pertama kali
export default function TodoList() {
  const [todo, setTodo] = useState("") //todo untuk menyimpan hasil dari element input
  const dispatch = useDispatch()
  const listTodos = useSelector(state => state.todos.todos)
  console.log(listTodos)

  const submit = (e) => {
    e.preventDefault()
    if(todo==="") return;
    dispatch(addTodo(todo));
    setTodo("")
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input 
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder="Masukan Todolist..."
        />
        <button>Submit</button>
      </form>
  
      {
        listTodos.map((item, idx) => 
          <ul key={idx}>
            <li>{item.todo}</li>
            <button onClick={() => dispatch(delTodo(item.id))}>X</button>
          </ul>
        )
      }

      <div>
        <h1>TodoList</h1>
        <ul>
          <li>
            {
              listTodos.map((item, index) => {
                return (
                  <div key={index}>
                    <li>
                      {item.todo}
                    </li>
                  </div>
                );
              })
            }
          </li>
        </ul>
      </div>
    </div>
  )
}
