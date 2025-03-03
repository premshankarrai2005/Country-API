import React, { useContext, useEffect, useState } from 'react';
import './CountryDetail.css'
import { Link, useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import CountryDetailShimmer from './CountryDetailShimmer';
import { DarkModeContext } from '../contexts/ThemecontextdarkMode';
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
                    name: data[0].name.common || data[0].name,
                    NativeName: Object.values(data[0].name.nativeName
                        || {})[0]?.common,
                    Population: data[0].population,
                    Region: data[0].region,
                    SubRegion: data[0].subregion,
                    Capital: data[0].capital,
                    Tld: data[0].tld,
                    Currency: Object.values(data[0].currencies || {})
                        .map((currency) => currency.name)
                        .join(', '),
                    Languages: Object.values(data[0].languages || {}).join(', '),
                    Borders: []
                })

                if (!data[0].borders) {
                    data[0].borders = []
                }

                Promise.all(data[0].borders.map((border) => {
                    return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                        .then((res) => res.json())
                        .then((borederdata) => borederdata[0].name.common)
                })).then((allbordersname) => {
                    setCountryData((prevstate) => ({ ...prevstate, Borders: allbordersname }))
                })

            }).catch((err) => { setnotFound(true) })
    }, [countryName.replace(/-/g, " ")])
    if (notFound) {
        return <ErrorPage />
    }

    const [isDark] = useContext(DarkModeContext)

    // 
    return (
        <>{countryData == null ? <><h3>Loading.......</h3>  < CountryDetailShimmer /></>
            : <main className={`bodys ${isDark ? 'dark' : ''}`} >
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
                                <p><b>Capital: </b><span className="capital">{countryData.Capital?.join(', ')}</span></p >
                                {/* <p><b>Capital: </b><span className="capital">{Array.isArray(countryData.Capital) ? countryData.Capital.join(', ') : ' '}</span></p > */}
                                <p>
                                    <b>Top Level Domain: </b><span className="top-level-domain">{countryData.Tld}</span>
                                </p >
                                <p><b>Currencies: </b><span className="currencies">{countryData.Currency}</span></p >
                                <p><b>Languages: </b><span className="languages">{countryData.Languages}</span></p >
                            </div >
                            {countryData.Borders.length !== 0 && <div className="border-countries" > <b className='name'>Border Countries: </b> &nbsp;<div className='borderlist'>{
                                countryData.Borders.map((border) => <Link key={border} className="borderlink" to={`/${border}`}>{border}</Link>)}</div>
                            </div >}
                        </div >
                    </div >
                </div >
            </main >
        }
        </>
    );
}

export default CountryDetail;
