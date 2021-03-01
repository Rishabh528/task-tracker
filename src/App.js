import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Mar 3rd at 5.45PM',
      reminder: true
    },
    {
      id: 2,
      text: 'Office Meeting',
      day: 'Everyday at 10.30AM',
      reminder: true
    },
    {
      id: 3,
      text: 'Secure Client Meeting',
      day: 'Everyday at 5.00 PM',
      reminder: true
    }
  ])

  return (
   <div className="container">
     <Header/>
     <Tasks tasks={tasks} />
   </div>
  );
}

export default App;
