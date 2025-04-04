import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, taskToEdit, editTask }) => {
const [taskName, setTaskName] = useState('');
const [taskDescription, setTaskDescription] = useState('');

useEffect(() => {
if (taskToEdit) {
setTaskName(taskToEdit.name);
setTaskDescription(taskToEdit.description);
}
}, [taskToEdit]);

const handleSubmit = (e) => {
e.preventDefault();
if (taskName && taskDescription) {
if (taskToEdit) {
editTask({ ...taskToEdit, name: taskName, description: taskDescription });
} else {
addTask({ name: taskName, description: taskDescription, completed: false });
}
setTaskName('');
setTaskDescription('');
} else {
alert('Please fill in both fields.');
}
};

return (
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Task Name"
value={taskName}
onChange={(e) => setTaskName(e.target.value)}
/>
<input
type="text"
placeholder="Task Description"
value={taskDescription}
onChange={(e) => setTaskDescription(e.target.value)}
/>
<button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
</form>
);
};

export default TaskForm;