import React, { useState } from 'react';
import "./TodoApp.css"
function TodoApp() {
  const [toDoList, setToDoList] = useState([]);

  const handleAddToDo = (event) => {
     event.preventDefault();
     const title = event.target.title.value;
     const description = event.target.description.value;
     setToDoList([...toDoList, { title, description }]);
     event.target.title.value = '';
     event.target.description.value = '';
  };
 
  return (
     <div>
       <h1>To Do App</h1>
       <form onSubmit={handleAddToDo}>
         <input type="text" name="title" placeholder="Title" />
         <input type="text" name="description" placeholder="Description" />
         <button type="submit">Add To Do</button>
       </form>
       <ul>
         {toDoList.map((toDo, index) => (
           <li key={index}>
             <h2>{toDo.title}</h2>
             <p>{toDo.description}</p>
           </li>
         ))}
       </ul>
     </div>
  );
 };

export default TodoApp;
