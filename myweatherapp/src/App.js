import React, { useEffect, useState } from 'react';
import CityCard from './components/CityCard';
import SearchInput from './components/SearchInput';
import Forecast from './components/Forecast';


function App() {

    const [location, setLocation] = useState('') //search value, will come from input field
    const [weatherData, setWeatherData] = useState()
    const [forecastData, setForecastData] = useState()
    
    const apiKey = "029e230506372c0158b2cac8fd7cebe2"
    
    useEffect (() => {
        if (location === ''){
            //do nothing
        } else {
            fetchWeather(location)};
    }, [location]);
    
    useEffect (() => {
        if (location === ''){
            //do nothing
        } else {
            fetchForecast(location)}
    }, [location]);

    
    async function fetchWeather(value) {
        /* 
        const response = await fetch(`
        http://api.weatherapi.com/v1/forecast.json?key=52cb77243f7141149ee130318221705&q=${value}&days=6&aqi=no&alerts=no
        `) 
        */
        const response = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}
        `)
        const data = await response.json()
        setWeatherData(data)
    }

    async function fetchForecast(value) {
        const response = await fetch(`
        http://api.weatherapi.com/v1/forecast.json?key=52cb77243f7141149ee130318221705&q=${value}&days=6&aqi=no&alerts=no
        `)
        const data = await response.json();
        setForecastData(data.forecast.forecastday);
    }


    const updateSearchTerm = text => {
        setLocation(text)
    }

    return (
        <>
            <SearchInput updateSearchTerm={updateSearchTerm}/>
            
            <div>This should be searched: {location}</div>
            
            {
            typeof weatherData === 'undefined' 
            ? 
            <div>Type something in the searchbar.</div>
            : 
            <>
                <CityCard data={weatherData} />
                <div>
                    {forecastData.map((forecast, index) => (
                        <Forecast 
                            key={index}
                            forecast={forecast}
                        />
                    ))}
                </div>
            </>
            }
        </>
    );
}

export default App;
