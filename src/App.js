import { useState, useEffect } from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("notes-theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("notes-theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Load notes from localStorage on mount
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes-data");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const [noteText, setNoteText] = useState("");

  const [searchText, setSearchText] = useState("");

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return { date, time, timestamp: now.getTime() };
  };

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const addNote = (color) => {
    const { date, time, timestamp } = getCurrentDateTime();
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      color,
      text: noteText || "",
      date,
      time,
      timestamp,
      pinned: false,
    });
    setNotes(tempNotes);
    setNoteText("");
  };

  const updateNote = (id, newText) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = newText;
    setNotes(tempNotes);
  };

  const delNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const togglePin = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].pinned = !tempNotes[index].pinned;
    setNotes(tempNotes);
  };

  const copyNote = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Sort notes: pinned first, then by timestamp
  const sortedNotes = [...notes].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return (b.timestamp || 0) - (a.timestamp || 0);
  });

  return (
    <div className=" dark:bg-zinc-800 main dark:transition-all ">
      <Header 
        handleThemeSwitch={handleThemeSwitch}
        setSearchText={setSearchText}
        notesCount={notes.length}
      />
      <div className="app-body px-8 pt-10 lg:px-10">
        <Sidebar addNote={addNote} />

        <NoteContainer
          notes={sortedNotes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))}
          delNote={delNote}
          updateNote={updateNote}
          togglePin={togglePin}
          copyNote={copyNote}
          searchText={searchText}
        />
      </div>
    </div>
  );
}

export default App;

