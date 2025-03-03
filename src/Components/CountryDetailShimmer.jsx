import React from 'react';
import './CountryDetail.css'

function CountryDetailShimmer() {
    return (
        <main className='body'  >
            <div className="country-details-container ">
                <div className="back-button shimmer">

                </div >
                <div className="country-details prem" >
                    <div className='imgdiv imgBoxdetail'> </div>
                    <div className="details-text-container" >
                        <h1></h1>
                        <div className="details-text" >
                            <p className='first'></p >
                            <p className='second'></p >
                            <p className='third'></p >
                            <p className='forth'></p >
                            <p className='fifth'></p >
                            <p className='sixth'></p >
                            <p className='seventh'></p >
                            <p className='eigth'></p >
                        </div >
                        <div className="border-countries Border" >
                            <p className='name border'>                            </p>
                            <p></p>
                            <p></p>


                            <div className='borderlist'></div>
                        </div >
                    </div >
                </div >
            </div >
        </main >
    );
}

export default CountryDetailShimmer;
