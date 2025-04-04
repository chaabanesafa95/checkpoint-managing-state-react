import React from 'react';

const TaskItem = ({ task, markCompleted, deleteTask, startEditing }) => {
return (
<div className={`task-item ${task.completed ? 'completed' : ''}`}>
<div onClick={() => startEditing(task)}>
<h3>{task.name}</h3>
<p>{task.description}</p>
</div>
<button onClick={() => markCompleted(task)}>Mark as Completed</button>
<button onClick={() => deleteTask(task)}>Delete</button>
</div>
);
};

export default TaskItem;