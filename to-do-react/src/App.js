import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1', description: 'Description for Task 1', isDone: false },
    { id: 2, task: 'Task 2', description: 'Description for Task 2', isDone: true },
  ]);

  const handleAddTask = (task, description) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, task, description, isDone: false },
    ]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id, task, description) => {
    setTasks(
      tasks.map((taskItem) =>
        taskItem.id === id
          ? { ...taskItem, task, description }
          : taskItem
      )
    );
  };

  const handleToggleDone = (id) => {
    setTasks(
      tasks.map((taskItem) =>
        taskItem.id === id
          ? { ...taskItem, isDone: !taskItem.isDone }
          : taskItem
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onToggleDone={handleToggleDone}
      />
    </div>
  );
}

export default App;