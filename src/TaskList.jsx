import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, markCompleted, deleteTask, startEditing }) => {
return (
<div className="task-list">
{tasks.map((task) => (
<TaskItem
key={task.name}
task={task}
markCompleted={markCompleted}
deleteTask={deleteTask}
startEditing={startEditing}
/>
))}
</div>
);
};

export default TaskList;