import './task.css'

function Item({item}) {
  return (
    <div className='list_items'>
        <li key={item.id} ><span style={item.packed ?{textDecoration: 'line-through'}:{}}>{item.quantity} {item.description}</span>
        <button>❌</button>
        </li>
        </div>
  )
}

export default Item

// Next: Building  a form and handlig submissions