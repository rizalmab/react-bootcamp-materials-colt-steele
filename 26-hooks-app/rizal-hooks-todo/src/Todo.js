import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

const Todo = ({ task, completed, removeTodo, id }) => {
  return (
    <ListItem>
      <Checkbox edge="start" tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : null }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton>
          <EditIcon aria-label="edit" />
        </IconButton>
        <IconButton onClick={() => removeTodo(id)}>
          <DeleteIcon aria-label="delete" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
