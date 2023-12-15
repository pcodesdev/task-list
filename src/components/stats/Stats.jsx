import './stat.css'

import stat from './../../assets/target-dynamic-gradient.png'
import trophy from './../../assets/medal-dynamic-color.png'
import addTask from './../../assets/forward-dynamic-color.png'

function Stats({tasks}) {
  if(!tasks.length) return <h3 className='stats-description'>
    Start adding new tasks to the task list <span><img className='icon' src={addTask} alt="add task" /></span>
  </h3>
  const numberOfTasks = tasks.length
  const numberOfCompletedTasks= tasks.filter(task => task.done).length
  const percentage = Math.round((numberOfCompletedTasks/numberOfTasks) * 100)
  return (
    <div className="">
      {/* Dynamic Rendering */}
    {percentage === 100 ? (
      <h3 className='stats-completed'>You have completed all the tasks for today <span><img className='icon' src={trophy} alt="completed" /></span></h3>
    ):(
<h3 className='stats-description'> You have <span className='stats-decoration'>{numberOfTasks}</span> tasks on your list, and you already completed <span className='stats-decoration'>{numberOfCompletedTasks}</span> task(s) <span className='stats-decoration'>{percentage}%</span> <span><img className='icon' src={stat} alt="stats" /></span></h3>
    )}
    
    </div>
  )

}

export default Stats