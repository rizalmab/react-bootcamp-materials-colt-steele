import React from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <Paper>
      {todos.map((todo) => {
        return (
          <>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
            />
            <Divider />
          </>
        );
      })}
    </Paper>
  );
};

export default TodoList;
