import {useEffect, useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
      .then (response => response.json())
      .then (data => setCountries(data)) //connection with useState
  }, [])
  return (
    <div>
      <h1>Here We will load Countries</h1>
      <h3>Available Countries: {countries.length}</h3>
    </div>
  )
}

export default App;
