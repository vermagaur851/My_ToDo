import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/Todo/TodoSlice"

const store = configureStore({
    reducer: toDoReducer,
})

export default store;