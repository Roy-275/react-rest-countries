import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, flag } = props.country;
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h1>
                {name}
            </h1>
            <h2>
                Capital name: {capital}
            </h2>
        </div>
    );
};

export default Country;