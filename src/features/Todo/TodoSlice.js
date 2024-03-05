import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        
    ]
}

const TodoSlice = createSlice({
    name:'ToDo',
    initialState,
    reducers: {
        addToDo: (state, actions) => {
            const todo = {
                id: nanoid(),
                text:actions.payload,
                completed:false
            }
            state.todos.push(todo);
        },
        removeToDo: (state, actions) => {
            state.todos = state.todos.filter((todo)=>
            todo.id!=actions.payload)
        },
        updateToDo: (state, actions) => {
            state.todos.map((todo)=>{
                todo.id===actions.payload? todo.text=actions.payload : todo
            })
        },
        completeToDo: (state,actions) => {
            state.todos.map((todo)=>{
                todo.id===actions.payload? todo.completed=!todo.completed : todo
            })
        },
    },
})

export const {addToDo, removeToDo, updateToDo, completeToDo} = TodoSlice.actions

export default TodoSlice.reducer;