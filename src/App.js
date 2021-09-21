import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// creating my component for loading all countries here
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h1>
        Travelling all around the world in different countries
      </h1>
      <h2>Countries available: {countries.length}</h2>
      <div>
        {
          countries.map(country => <Country name={country.name} capital={country.capital}></Country>
          )
        }
      </div>
    </div>
  );
};

// creating my component for showing country in webpage
function Country(props) {
  return (
    <div style={{
      background: 'orange',
      border: '2px solid red',
      margin: '20px',
      borderRadius: '10px'
    }}>
      <h1>
        Country name: {props.name}
      </h1>
      <h2>
        Capital name: {props.capital}
      </h2>
    </div>
  );
};

export default App;
