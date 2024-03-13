import { useEffect } from "react";
import { useState } from "react";
import './Countries.css'
import SingleCountry from "../SingleCountry/SingleCountry";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])

    const handleVisitedCountry = (country) => {
        console.log("Add this to your visited country")
        console.log(country);

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
                <h4>Visited Countries: {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.cca3}</li>)
                    }
                </ul>
            </div>
            <h3>Visited Flags:</h3>
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={flag} key={flag.png} />)
                }

            </div>
            <div className="country-container">
                {
                    countries.map(country => <SingleCountry
                        country={country}
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                    >
                    </SingleCountry>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;