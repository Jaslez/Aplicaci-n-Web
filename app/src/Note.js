// Note.js
import React from 'react';

function Note({ note }) {
  return (
    <div className={`note card ${note.isImportant ? 'border-danger' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
}

export default Note;

