import { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { getTasks, createTask, deleteTask } from "./api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async () => {
    if (!title) return;
    await createTask({ title });
    setTitle("");
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          DevOps Todo App
        </Typography>

        <TextField
          fullWidth
          label="New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          style={{ marginTop: 10 }}
          fullWidth
        >
          Add Task
        </Button>

        <List>
          {tasks.map((task) => (
            <ListItem
              key={task._id}
              secondaryAction={
                <IconButton onClick={() => handleDelete(task._id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task.title} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default App;