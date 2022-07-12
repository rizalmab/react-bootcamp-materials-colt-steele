import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    props.setTodos([]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">New todo:</label>
        <input
          type="text"
          name="newTodo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
