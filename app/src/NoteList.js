// NoteList.js
import React from 'react';
import Note from './Note';

function NoteList({ notes }) {
  return (
    <div className="note-list row">
      {notes.map((note, index) => (
        <div key={index} className="col-md-4 mb-3">
          <Note note={note} />
        </div>
      ))}
    </div>
  );
}

export default NoteList;


