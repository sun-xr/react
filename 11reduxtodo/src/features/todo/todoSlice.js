//
import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "todo-1",
      text: "Le123arn React",
      completed: false,
    },
    {
      id: "todo-2",
      text: "Learn Redux",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
//KNOW - to wire the store
export default todoSlice.reducer;
