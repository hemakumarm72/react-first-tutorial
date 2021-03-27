import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/banner/banner';
import Content from './components/content/content';

function App() {
  return (

    <div className="site">
      <Navbar />
      <Sidebar />
      <Content />
    </div>

  );
}

export default App;
