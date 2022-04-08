import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

const App = () => {

  const [notes, setNotes] = useState([]);

  // Delete a note from an array
  function deleteNote(id) {
    setNotes(prevNotes => {
    //Use the filter function to filter out the item that needs deletion.
      return prevNotes.filter((noteItem, index) => {
        return  index !== id;
      });
    });
  }

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
    {/* Take array and render seperate Note components for each item. */} */}
      {notes.map(noteItem => {
        return <Note 
        key={index}
        id={index} 
        title={noteItem.title} 
        content={noteItem.content} 
        onDelete={deleteNote}/>
      })}
      
      <Footer />
    </div>
  )
  
}

export default App;