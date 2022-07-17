import React, { useState } from 'react'


export default function CityCard(props) {

    console.log(props.data)

    return (
        <div className='city-card'>
            <h1 className='city'> { props.data.location.name }</h1>
            <p className='country'>{ props.data.location.country }</p>
            <div className='temp-and-icon'>
                <p className='temp'>{ props.data.current.temp_c } °C</p>
                <img className='icon' alt='weather icon' src={ props.data.current.condition.icon }/>
            </div>
            <div className='additonal-data'>
                <div>
                    <img alt='wind icon'></img>
                    <p>{ props.data.current.wind_kph } km/h</p>
                </div>
                <div>
                    <img alt='UV icon'></img>
                    <p>{ props.data.current.uv }</p>
                </div>
                <div>
                    <img alt='humidity icon'></img>
                    <p>{ props.data.current.humidity }</p>
                </div>
            </div>
        </div>
    )
}
