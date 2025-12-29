import React from "react";

function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    // 'completed' class applies strikethrough style if todo.completed is true
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      
      {/* Checkbox to mark completed */}
      <input
        type="checkbox"
        checked={todo.completed} // reflects completion state
        onChange={() => toggleTodo(todo.id)} // toggle on click
      />
      
      {/* Display task text */}
      <span>{todo.text}</span>

      {/* Delete button */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default Todo;