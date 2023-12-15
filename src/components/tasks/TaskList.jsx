import { useState } from 'react';
import './task.css';
import task from './../../assets/key-dynamic-gradient.png';
import Item from './Item';


function TaskList({ tasks, onDeleteTask, onTaggleTask}) {

  // Sorting tasks

  const [sortBy, setSortBy] = useState("input")

  let sortedTasks;

  if(sortBy === "input")  sortedTasks=tasks

  if(sortBy === "description") sortedTasks = tasks.slice().sort((a, b) => a.description.localeCompare(b.description))

  if(sortBy === "done") sortedTasks = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done))

  return (
    <div className="list_items">
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="done">Sort by complete status</option>
        </select>
      </div>
      <h3>
        TaskList <span><img className='icon' src={task} alt="task-list" /></span>
      </h3>
    
      <ul className='list'>
        {sortedTasks.map((task) => (
          <Item task={task} onDeleteTask={onDeleteTask} onTaggleTask={onTaggleTask}
          key={task.id} />
        ))}
      </ul>
      
    </div>
  );
}

export default TaskList;
