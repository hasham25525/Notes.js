
import { useState, useEffect } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

function App() {

  const [notes, setNotes] = useState([]);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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

  const delNote = (id) => {
    const tempNotes = [...notes]

    const index = tempNotes.findIndex(item => item.id === id)
    if (index < 0) return

    tempNotes.splice(index, 1);
    setNotes(tempNotes);

  }
  return (
    <div className=' dark:bg-zinc-800  '>

      <Header handleThemeSwitch={handleThemeSwitch} />
      <div className='app-body'>

        <Sidebar addNote={addNote} />
        <NoteContainer notes={notes} delNote={delNote} />
      </div>
    </div>
  );
}

export default App;
