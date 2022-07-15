import React, { useState } from "react";
import TodoList from "./TodoList";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import useInputState from "./hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          fullWidth
          margin="normal"
          label="Add New Todo"
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
