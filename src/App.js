import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import "./App.css";

function App() {
  // ------------------------------
  // State declarations
  // ------------------------------

  // Holds all todo tasks
  const [todos, setTodos] = useState([]);

  // Controlled input for new task text
  const [input, setInput] = useState("");

  // Current filter: All / Active / Completed
  const [filter, setFilter] = useState("All");

  // ------------------------------
  // Side effects: LocalStorage
  // ------------------------------

  // Load todos from LocalStorage on first render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []); // Empty dependency array → runs only once on mount

  // Save todos to LocalStorage whenever 'todos' state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ------------------------------
  // Event handlers / helper functions
  // ------------------------------

  // Add a new todo
  const addTodo = () => {
    if (input.trim() === "") return; // prevent empty tasks
    const newTodo = {
      id: Date.now(), // unique ID
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]); // add to todos array
    setInput(""); // clear input field
  };

  // Toggle a todo as completed/uncompleted
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo by ID
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos based on selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true; // All
  });

  // ------------------------------
  // JSX: UI
  // ------------------------------
  return (
    <div className="app">
      <h1>React To-Do App</h1>

      {/* Input field and Add button */}
      <div className="input-container">
        <input
          type="text"
          value={input} // controlled input
          placeholder="Add a task"
          onChange={(e) => setInput(e.target.value)} // update state on typing
          onKeyDown={(e) => e.key === "Enter" && addTodo()} // add on Enter key
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* List of todos */}
      <TodoList
        todos={filteredTodos} // pass filtered tasks
        toggleTodo={toggleTodo} // function to toggle completion
        deleteTodo={deleteTodo} // function to delete tasks
      />

      {/* Filter buttons */}
      <TodoFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;