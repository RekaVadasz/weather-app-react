import React from 'react'

export default function Forecast(forecast) {
    console.log(forecast)

    return (
        <div>
            <p>{ forecast.forecast.date }</p>
            <p>{ Math.round (forecast.forecast.day.avgtemp_c) }°C</p>
        </div>
  )
}
