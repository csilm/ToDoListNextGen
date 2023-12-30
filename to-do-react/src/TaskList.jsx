import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onEditTask, onToggleDone }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  );
}

export default TaskList;
