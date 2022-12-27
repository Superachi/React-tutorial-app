import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {task.text} <FaTimes style= {{color: 'red', cursor: 'pointer'}}
        onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
      <p>{task.reminder}</p>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func
}

export default Task