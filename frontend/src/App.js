import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import { getTasks, createTask } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const addTask = async () => {
    const task = await createTask(title);
    setTasks([...tasks, task]);
    setTitle("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>DevOps MERN Sample App</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={addTask}>Add</button>

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
