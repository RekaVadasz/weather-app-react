import React, { useState } from 'react'


export default function CityCard(props) {

    return (
        <div className='city-card'>
            <h1 className='city'> { props.data.name }</h1>
            <p className='country'>{ props.data.sys.country }</p>
            <div className='temp-and-icon'>
                <p className='temp'>{ Math.round(props.data.main.temp) } °C</p>
                <img className='icon' alt='weather icon' />
                <p className='condition'>{ props.data.weather[0].main }</p>
            </div>
            <div className='additonal-data'>
                <div>
                    <img alt='wind icon'></img>
                    <p>{ props.data.wind.speed } km/h</p>
                </div>
                <div>
                    <img alt='air pressure icon'></img>
                    <p>{ props.data.main.pressure } hPa</p>
                </div>
                <div>
                    <img alt='humidity icon'></img>
                    <p>{ props.data.main.humidity } %</p>
                </div>
            </div>
        </div>
    )
}
