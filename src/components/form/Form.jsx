import './form.css'


import plan from './../../assets/map-pin-dynamic-gradient.png'

function Form() {
  return (
    <div>
        <h3>What are your plans for today? <span><img className='icon' src={plan} alt="plan-for-the-day" /></span></h3>
    </div>
  )
}

export default Form