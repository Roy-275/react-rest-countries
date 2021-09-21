import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
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
            <div className="country-container">
                {
                    countries.map(country => <Country country={country} key={country.name}></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;