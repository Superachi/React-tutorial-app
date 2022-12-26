import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks] = useState([
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

  return (
    <div className='container'>
      <Header title='Tits in the timeline' />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
