import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    //KNOW - action.payload is the payload that we are sending to the reducer
    dispatch(addTodo(input));
    setInput("");
  };
  return <div>addtodo</div>;
}

export default AddTodo;
