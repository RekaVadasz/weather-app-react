import React, { useState } from 'react'

export default function CityCard() {

    
    return (
        <div className='city-card'>
            <h1 className='city'>Paris</h1>
            <p className='country'>France</p>
            <div className='temp-and-icon'>
                <p className='temp'>32°C</p>
                <img className='icon' alt='weather icon'/>
            </div>
            <div className='additonal-data'>
                <div>
                    <img alt='wind icon'></img>
                    <p>10km/h</p>
                </div>
                <div>
                    <img alt='rain icon'></img>
                    <p>0%</p>
                </div>
                <div>
                    <img alt='humidity icon'></img>
                    <p>22%</p>
                </div>
            </div>
        </div>
    )
}
