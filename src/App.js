
import { useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer';
import Sidebar from './Components/Sidebar';

function App() {

  const [notes, setNotes] = useState([
    {
      text:'hello',
      time:"3:00PM",
      color:'white'
    },
    {
      text:'hello',
      time:"3:00PM",
      color:'lightpink'
    },
    {
      text:'hello',
      time:"3:00PM",
      color:'lightblue'
    }
  ])

  const addNote=(color)=>{
    const newNotes=[...notes];
    newNotes.push({
      text:'',
      time: Date.now(),
      color,
    })
    setNotes(newNotes);
  }

  return (
    <div className='App'>
    <Sidebar addNote={addNote}/>
   <NoteContainer notes={notes}/>
    </div>
  );
}

export default App;
