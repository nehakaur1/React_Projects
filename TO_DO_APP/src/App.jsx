import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const [task, setTask] = useState(""); // Current input value
  const [todos, setTodos] = useState([]); // List of todos

  // Add new todo
  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, completed: false }]);
      setTask(""); // Clear input after adding
      toast.success("Task added! 🎉")
    }
    else{
      toast.error("⚠️ Please enter a task!");
  }};

  // Toggle complete status
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2 className="title">✅ Todo List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">Add</button>
      </div>

      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        <ToastContainer  position= "top-center"
    autoClose={500}
   style={{ top: "10px" }} />
    </div>
  );
};

export default App;
