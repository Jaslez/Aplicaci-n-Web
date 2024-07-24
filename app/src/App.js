// App.js
import React, { useState, useEffect} from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  return (
    <div className="App container mt-5">
      <h1 className="mb-4">Notas Adhesivas</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
