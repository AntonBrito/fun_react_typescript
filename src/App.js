import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  
  }
  return (
    <div className="App">
      <input onChange={onSearchInput} name="search" type="text" />
    </div>
  );
}

export default App;
