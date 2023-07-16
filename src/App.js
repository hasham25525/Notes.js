
import { useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer';
import Sidebar from './Components/Sidebar';

function App() {

  const [notes, setNotes] = useState([]);
  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const delNote=(id)=>{
    const tempNotes=[...notes]

    const index=tempNotes.findIndex(item=>item.id===id)
      if(index<0) return

    tempNotes.splice(index,1);
    setNotes(tempNotes);
  
  }
  return (
    <div className='App'>
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} delNote={delNote} />
    </div>
  );
}

export default App;
