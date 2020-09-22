import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = React.useState()

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
     setSearchValue(event.target.value)
  }
  return (
    <div className="App">
      <input onChange={onSearchInput} name="search" type="text" />
    </div>
  );
}

export default App;
