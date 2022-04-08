import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import CreateArea from './CreateArea';

const App = () => {

  const [notes, setNotes] = useState([]);

  // Add new note to an array.
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  return (
    <div>
      <Header />
      <CreateArea  onAdd={addNote}/>
      {notes.map(note => {
        return <Note key={1} title={note.title} content={note.content}/>
      })}
      
      <Footer />
    </div>
  )
  
}

export default App;