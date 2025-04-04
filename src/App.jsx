import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
const [tasks, setTasks] = useState([]);
const [taskToEdit, setTaskToEdit] = useState(null);

useEffect(() => {
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
setTasks(savedTasks);
}, []);

const addTask = (task) => {
const updatedTasks = [...tasks, task];
setTasks(updatedTasks);
localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

const editTask = (updatedTask) => {
const updatedTasks = tasks.map((task) =>
task.name === updatedTask.name ? updatedTask : task
);
setTasks(updatedTasks);
localStorage.setItem('tasks', JSON.stringify(updatedTasks));
setTaskToEdit(null);
};

const markCompleted = (task) => {
const updatedTasks = tasks.map((t) =>
t.name === task.name ? { ...t, completed: !t.completed } : t
);
setTasks(updatedTasks);
localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

const deleteTask = (task) => {
if (window.confirm('Are you sure you want to delete this task?')) {
const updatedTasks = tasks.filter((t) => t.name !== task.name);
setTasks(updatedTasks);
localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
};

const startEditing = (task) => {
setTaskToEdit(task);
};

return (
<div className="app">
<h1>To-Do List</h1>
<TaskForm addTask={addTask} taskToEdit={taskToEdit} editTask={editTask} />
<TaskList
tasks={tasks}
markCompleted={markCompleted}
deleteTask={deleteTask}
startEditing={startEditing}
/>
</div>
);
};

export default App;


