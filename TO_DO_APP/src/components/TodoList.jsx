import React from "react";
import "../App.css";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span
              onClick={() => toggleComplete(index)}
              className={todo.completed ? "completed" : ""}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)} className="delete-btn">
              ❌
            </button>
          </li>
        ))
      ) : (
        <p className="empty">No tasks yet. Add one!</p>
      )}
    </ul>
  );
};

export default TodoList;
