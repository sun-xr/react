import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  //  todo.todo   单个对象.属性
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompletedTodo = () => {
    toggleCompleted(todo.id);
  };
  return <div>todolist</div>;
}

export default TodoItem;
