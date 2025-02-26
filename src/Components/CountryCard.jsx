import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ name, flag, Population, Region, Capital }) {
  return (
    <>
      <Link className="country-card" to={`/${name.replace(/ /g, "-")}`}>
        < img className="imgBox" src={flag} alt={name + 'Flag'} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>

          {/* <p><b>Native Name: </b><span className="native-name"></span></p> */}
          <p><b>Population: </b><span className="population">{Population.toLocaleString('en-IN')}</span></p>
          <p><b>Region: </b><span className="region">{Region}</span></p>
          <p><b>Capital: </b><span className="capital">{Capital}</span></p>
          {/*  <p><b>Sub Region: </b><span className="sub-region"></span></p> */}
          {/* <p>
                <b>Top Level Domain: </b><span className="top-level-domain"></span>
              </p> */}
          {/* <p><b>Currencies: </b><span className="currencies"></span></p> */}
          {/* <p><b>Languages: </b><span className="languages"></span></p> */}
        </div>
        {/* <div className="border-countries"><b>Border Countries: </b>&nbsp;</div> */}

      </Link >

    </>
  );
}

export default CountryCard;
