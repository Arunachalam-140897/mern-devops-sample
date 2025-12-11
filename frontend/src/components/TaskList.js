import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h3>Tasks:</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
