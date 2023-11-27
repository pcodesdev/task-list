import './task.css'

import trash from './../../assets/trash-can-dynamic-gradient.png'

function Item({item}) {
  return (
    <div className='list_items'>
        <li key={item.id} className='item_list'><span style={item.packed ?{textDecoration: 'line-through'}:{}}>{item.quantity} {item.description}</span>
        <button className='close-btn'><img src={trash} alt="trash can" /></button>
        </li>
        </div>
  )
}

export default Item

// Next: Building  a form and handlig submissions