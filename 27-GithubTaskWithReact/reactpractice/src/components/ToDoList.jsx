import React from 'react'
import "./todolist.css"

function TodoList() {
  const name = 'Gregorio Y. Zara';
    return (
      <div>
            <h1>{name}'s To Do List</h1>

        <h1>Hedy Lamarr's Todos</h1>
        <img 
          src="https://i.imgur.com/yXOvdOSs.jpg" 
          alt="Hedy Lamarr" 
          className="photo"
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>

      </div>
    );
  }
  
  export default TodoList;
  