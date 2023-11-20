// import React from 'react'

import stat from './../../assets/target-dynamic-gradient.png'

function Stats() {
  return (
    <h3>You have X items on your list, and you already packed X (%)  <span><img className='icon' src={stat} alt="stats" /></span></h3>
  )
}

export default Stats