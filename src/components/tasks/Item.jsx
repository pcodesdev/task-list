// import  {useState} from 'react';
import './task.css'

import trash from './../../assets/trash-can-dynamic-gradient.png'

function Item({task, onDeleteTask, onTaggleTask}) {
  // const [checked, setChecked] = useState(false);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  
  return (
    <div className='list_items'>
     
        <li key={task.id} className='item_list'>
        <input type="checkbox" value={task.id}
        onChange={() => onTaggleTask(task.id)}
        className='task-control'/>

          <span style={task.done ?{textDecoration: 'line-through'}:{}}>{task.quantity} {task.description}</span>
        <button className='close-btn' onClick={() => onDeleteTask(task.id)}><img src={trash} alt="trash can" /></button>
        </li>
        </div>
  )
}

export default Item

// Next: Building  a form and handlig submissions