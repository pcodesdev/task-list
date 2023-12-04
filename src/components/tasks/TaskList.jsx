import './task.css'


import task from './../../assets/key-dynamic-gradient.png'

import Item from './Item';


//  


function TaskList({ tasks , onDeleteTask}) {
  return (
    <div className="list_items">
    <h3>TaskList <span><img className='icon' src={task} alt="task-list" /></span></h3>
    
    
    <ul className='list'>
{tasks.map((item) =>( <Item task={item} onDeleteTask={onDeleteTask} key={item.id}/>))}
    </ul>
    </div>
  )
}

export default TaskList