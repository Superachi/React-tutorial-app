import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: 'Feb 5th at 2:30 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Baba Bing Bing',
      day: 'Feb 6th at 3:00 PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grizz Co. Big Run',
      day: 'Feb 6th at 3:00 PM',
      reminder: false,
    }
  ])

  // Delete task
  const deleteTask = (id) => {
    console.log('clicked delete button.');
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header title='Tits in the timeline' />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks to show.'
      }
    </div>
  );
}

export default App;
