import { useState } from 'react';
import './SingleCountry.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const SingleCountry = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <img style={{ border: '1px solid purple' }} src={flags?.png} alt="" />
            <h3 style={{ color: visited ? 'purple' : 'green' }}>Name: {name?.common} </h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            {/* <button onClick={handleVisited} className=''>Visited</button> {visited && 'I have visited this country '} */}
            <br></br>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(flags.png)}>Add Visited Flag</button>
            <button onClick={handleVisited} className=''>{visited ? "Visited" : "Going"}</button>
            {visited ? 'I have visited this country ' : "I want to visit"}
            <hr />

            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default SingleCountry;