import './form.css'


import plan from './../../assets/map-pin-dynamic-gradient.png'
import { useState } from 'react'

function Form({onAddTasks}) {

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  // create new state to hold the two variables above
  
 
  // form submit
  function handleSubmit(e){
e.preventDefault()
// only submit the form when complete
if(!description) return

const newTask = {
  description,
  quantity,
  done: false,
  id: Date.now(),
}
console.log(newTask)
onAddTasks(newTask)

setDescription('')
setQuantity(1)
  }
  return (

    <form className='form_add-item' onSubmit={handleSubmit}>
      <div className="form_add-inputs">
        <h3>What are your plans for today? <span><img className='form-icon' src={plan} alt="plan-for-the-day" /></span></h3>
        <select className='form_add-select' name="" id="" value={quantity} 
        // change the state 
        onChange={(e)=>setQuantity(Number(e.target.value))}>
          {/* generate a number of options from 1 to 20 */}
          {Array.from({length: 20}, (_,i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
        </select>
        <input className='form_add-input' type="text" placeholder='Task...' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button className='form_add-btn'>Add</button>
        </div>
    </form>
  )
}

export default Form 

// Todo: Reviewing Lifting Up State - Reviewing Chapter 7