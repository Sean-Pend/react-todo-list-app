import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {/* Loop through todos and render each Todo component */}
      {todos.map((todo) => (
        <Todo
          key={todo.id} // unique key for React
          todo={todo} // pass todo object
          toggleTodo={toggleTodo} // pass toggle function
          deleteTodo={deleteTodo} // pass delete function
        />
      ))}
    </ul>
  );
}

export default TodoList;