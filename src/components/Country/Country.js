import React from 'react';
import './Country.css';

const Country = (props) => {
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

export default Country;