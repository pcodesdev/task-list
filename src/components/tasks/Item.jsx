import './task.css'

import trash from './../../assets/trash-can-dynamic-gradient.png'

function Item({task, onDeleteTask}) {
  return (
    <div className='list_items'>
        <li key={task.id} className='item_list'><span style={task.packed ?{textDecoration: 'line-through'}:{}}>{task.quantity} {task.description}</span>
        <button className='close-btn' onClick={() => onDeleteTask(task.id)}><img src={trash} alt="trash can" /></button>
        </li>
        </div>
  )
}

export default Item

// Next: Building  a form and handlig submissions