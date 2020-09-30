import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="parent">
      <Header />
      <main>
        <MainContent />
      </main>
      <footer>MobileIncubator.com - All Rights Reserved</footer>
    </div>
  );
}

export default App;
