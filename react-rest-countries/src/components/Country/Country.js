import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,population,name,flags} = props.country; //destructure
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt={"flags image of"+name.common} />
            <p>Country Population: {population}</p>
            <p><small>Population: {area}</small></p>
        </div>
    );
};

export default Country;