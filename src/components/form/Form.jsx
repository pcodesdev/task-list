import { motion } from 'framer-motion';

import './form.css'
import useSound from 'use-sound';


import plan from './../../assets/map-pin-dynamic-gradient.png'
import deleteSound from './../../assets/archivo.mp3'
import { useState } from 'react'

function Form({onAddTasks, onClearTasks}) {

  const [playHoverSound] = useSound(deleteSound, { volume: 0.5 });

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  // create new state to hold the two variables above
  // Note: React is all about immutability
 
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

        <motion.div
          whileHover={{ scale: 1.2, transition: { duration: 0.2, ease: 'easeInOut' } }}
          onMouseEnter={() => playHoverSound()}
          onMouseDown={playHoverSound.stop}
        >

        <button onClick={onClearTasks} className='form_add-btn' style={{backgroundColor: '#710400'}}>Clear All Tasks</button>
  </motion.div>
        </div>
    </form>
  )
}

export default Form 

// Todo: Updating an item complete immutable data operations