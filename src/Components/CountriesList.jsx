
import CountriesData from "../CountriesData";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import CountryListShimmer from "./CountryListShimmer.jsx";

function CountriesList({ Query }) {
  const [CountriesData, setCountriesData] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
  }, [])
  if (CountriesData.length === 0) {

  }

  return (
    <>
      {!CountriesData.length ? < CountryListShimmer />
        : <div className="countries-container">
          {CountriesData.filter((country) =>
            country.name.common.toLowerCase().includes(Query) || country.region.toLowerCase().includes(Query)
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
        </div>}
    </>

  );
}

export default CountriesList;
