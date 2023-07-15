
import { useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer';
import Sidebar from './Components/Sidebar';

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (color) => {
    const newNotes = [...notes];
    
    newNotes.push({
      id: Date.now() + '' + Math.floor(Math.random() * 78),
      text: '',
      time: Date.now(),
      color,
    })
    setNotes(newNotes);
  }

  return (
    <div className='App'>
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
