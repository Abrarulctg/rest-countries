import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    const { country, handleVisitedCountry, handleVisitedFlags } = props;

    return (
        <div>
            <h4>Country Detail</h4>
            {/* <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;