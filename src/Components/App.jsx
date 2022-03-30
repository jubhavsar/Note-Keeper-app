import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

const App = () => {
  return (
    <div>
      <Header />
      <Note title="Note Title" content="Note Title"/>
      <Footer />
    </div>
  )
  
}

export default App;