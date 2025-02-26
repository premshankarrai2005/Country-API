import React, { useEffect, useState } from 'react';
import './CountryDetail.css'
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
function CountryDetail() {
    const Params = useParams()
    const countryName = Params.Country
    const [countryData, setCountryData] = useState(null)
    const [notFound, setnotFound] = useState(false)
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName.replace(/-/g, " ")}?fullText=true`)
            .then(res => res.json())
            .then(data => {
                setCountryData({
                    flag: data[0].flags.svg,
                    name: data[0].name.common,
                    NativeName: Object.values(data[0].name.nativeName
                    )[0].common,
                    Population: data[0].population,
                    Region: data[0].region,
                    SubRegion: data[0].subregion,
                    Capital: data[0].capital,
                    Tld: data[0].tld,
                    Currency: Object.values(data[0].currencies)
                        .map((currency) => currency.name)
                        .join(', '),
                    Languages: Object.values(data[0].languages).join(', ')
                })
            }).catch((err) => { setnotFound(true) })
    }, [])
    if (notFound) {
        return <ErrorPage />
    }
    return (

        countryData == null ? ('loading.....') :
            (<main className='body'  >
                <div className="country-details-container">
                    <span className="back-button" onClick={() => history.back()} >
                        <i className="fa-solid fa-arrow-left"></i> &nbsp; Back
                    </span >
                    <div className="country-details" >
                        <img alt={`${countryData.name} flag`} src={countryData.flag} className='imgBoxdetail' />
                        <div className="details-text-container" >
                            <h1>{countryData.name}</h1>
                            <div className="details-text" >
                                <p><b>Native Name: </b><span className="native-name">{countryData.NativeName}</span></p >
                                <p><b>Population: </b><span className="population">{countryData.Population.toLocaleString('en-IN')}</span></p >
                                <p ><b>Region: </b><span className="region">{countryData.Region}</span></p >
                                <p><b>Sub Region: </b><span className="sub-region">{countryData.SubRegion}</span></p >
                                <p><b>Capital: </b><span className="capital">{countryData.Capital.join(', ')}</span></p >
                                <p>
                                    <b>Top Level Domain: </b><span className="top-level-domain">{countryData.Tld}</span>
                                </p >
                                <p><b>Currencies: </b><span className="currencies">{countryData.Currency}</span></p >
                                <p><b>Languages: </b><span className="languages">{countryData.Languages}</span></p >
                            </div >
                            <div className="border-countries" > <b>Border Countries: </b> &nbsp;</div >
                        </div >
                    </div >
                </div >
            </main >)
    );
}

export default CountryDetail;
