import './form.css'


import plan from './../../assets/map-pin-dynamic-gradient.png'

function Form() {
  // form submit
  function handleSubmit(e){
e.preventDefault()
console.log(e)
  }
  return (
    <form className='form_add-item' onSubmit={handleSubmit}>
      <div className="form_add-inputs">
        <h3>What are your plans for today? <span><img className='form-icon' src={plan} alt="plan-for-the-day" /></span></h3>
        <select className='form_add-select' name="" id="">
          {/* generate a number of options from 1 to 20 */}
          {Array.from({length: 20}, (_,i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
        </select>
        <input className='form_add-input' type="text" placeholder='Task...' />
        <button className='form_add-btn'>Add</button>
        </div>
    </form>
  )
}

export default Form

// Todo: Controlled Elements