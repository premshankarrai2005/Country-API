import React from 'react';
import './CountryListShimmer.css'

function CountryListShimmer() {
    return (
        <div className='countries-container'>
            {Array.from({ length: 20 }).map((el, index) => {
                return <div key={index} className='country-card Shimmer'> </div>
            })}
        </div>
    );
}

export default CountryListShimmer;
