import React from 'react';
import { useState } from 'react';

function TaskItem({ task, onDeleteTask, onEditTask, onToggleDone }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task.task);
    const [updatedDescription, setUpdatedDescription] = useState(task.description);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
      setUpdatedTask(task.task);
      setUpdatedDescription(task.description);
    };
  
    const handleSave = () => {
      onEditTask(task.id, updatedTask, updatedDescription);
      setIsEditing(false);
    };
  
    return (
      <li>
        {/* ... (checkbox, task display, delete button) ... */}
        {isEditing ? (
          <div>
            <input
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
            />
            <input
              type="text"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </li>
    );
  }

export default TaskItem;
