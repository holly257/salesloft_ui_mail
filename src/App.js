import React from 'react';
import Nav from './components/Nav';
import TagSidebar from './components/TagSidebar';
import MailList from './components/MailList';

import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <TagSidebar />
        <MailList />
    </div>
  );
}

export default App;
