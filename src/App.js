import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Checkout from './components/Checkout';
import { React, useState } from 'react';

function App() {

  // dropdownValues is the state var name, updateDropdownValues is the func to update dropdownValues
  const [dropdownValues, updateDropdownValues] = useState(
    [
      {
        "amount": 6,
        "cost": 12
      },
      {
        "amount": 12,
        "cost": 24
      },
      {
        "amount": 24,
        "cost": 48
      }
    ])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form dropdownValues={dropdownValues}/>
      </header>
    </div>
  );
}

export default App;
