import './task.css';
import task from './../../assets/key-dynamic-gradient.png';
import Item from './Item';

function TaskList({ tasks, onDeleteTask, onTaggleTask}) {
  return (
    <div className="list_items">
      <h3>
        TaskList <span><img className='icon' src={task} alt="task-list" /></span>
      </h3>
    
      <ul className='list'>
        {tasks.map((task) => (
          <Item task={task} onDeleteTask={onDeleteTask} onTaggleTask={onTaggleTask}
          key={task.id} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
