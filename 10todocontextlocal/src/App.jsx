import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { TodoProvider } from "./contexts";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((prevtodo) =>
        prevtodo.id === id ? { ...prevtodo, ...todo } : prevtodo
      );
    });
  };
  const deleteTodo = (id) => {
    setTodos((prev) => {
      prev.filter((prevtodo) => prevtodo.id !== id);
    });
  };
  const toggleCompleted = (id) => {
    setTodos((prev) => {
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      );
    });
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleCompleted,
      }}
    ></TodoProvider>
  );
}

export default App;
