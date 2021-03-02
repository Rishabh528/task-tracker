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

  //delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id!==id))
    // console.log("delete called")
  }

  return (
   <div className="container">
     <Header/>
     {  tasks.length>0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} /> : 
        <p>Relax, No Tasks left</p>
    }
   </div>
  );
}

export default App;
