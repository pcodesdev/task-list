import './task.css'


import task from './../../assets/key-dynamic-gradient.png'

import Item from './Item';


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];


function TaskList() {
  return (
    <div className="list_items">
    <h3>TaskList <span><img className='icon' src={task} alt="task-list" /></span></h3>
    
    
    <ul className='list'>
{initialItems.map((item) =>( <Item item={item} key={item.id}/>))}
    </ul>
    </div>
  )
}

export default TaskList