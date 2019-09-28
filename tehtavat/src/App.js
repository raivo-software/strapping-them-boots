import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import { NavBar } from './tehtava1/NavBar';
import { MainContent } from './MainContent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
