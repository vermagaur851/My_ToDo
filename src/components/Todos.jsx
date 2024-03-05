import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItems from './TodoItem'

function Todos() {
    const todos = useSelector(state=>state.todos);
    console.log(todos)
  return (
    <>
        {
            todos.map((todo)=><ToDoItems key={todo.id} todo={todo}/>)
        }
    </>
  )
}

export default Todos
