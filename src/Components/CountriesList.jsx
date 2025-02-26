
// import CountriesData from "../CountriesData";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";

function CountriesList({ Query }) {
  const [CountriesData, setCountriesData] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
  }, [])
  if (CountriesData.length === 0) {

  }
  // const [Query, setQuery] = useState('')
  return (
    <>
      <div className="countries-container">
        {CountriesData.filter((country) =>
          country.name.common.toLowerCase().includes(Query)
        ).map((country) => {
          return (
            <CountryCard
              name={country.name.common}
              flag={country.flags.svg}
              Population={country.population}
              Region={country.region}
              Capital={country.capital?.[0]}
              key={country.name.common}
            />
          );
        })}
      </div>
    </>

  );
}

export default CountriesList;
