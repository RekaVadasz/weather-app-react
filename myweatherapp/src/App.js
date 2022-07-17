import React, { useEffect, useState } from 'react';
import CityCard from './components/CityCard';
import SearchInput from './components/SearchInput';


function App() {

    const [location, setLocation] = useState('') //search value, will come from input field
    const [weatherData, setWeatherData] = useState()

    useEffect (() => {
        if (location === ''){
        }else {fetchData(location)}
    }, [location]);

    async function fetchData(value) {
        const response = await fetch(`
        http://api.weatherapi.com/v1/current.json?key=52cb77243f7141149ee130318221705&q=${value}&aqi=no
        `);
        const data = await response.json()
        setWeatherData(data)
        
    }

    const updateSearchTerm = text => {
        setLocation(text)
    }

    return (
        <>
            <SearchInput updateSearchTerm={updateSearchTerm}/>
            <div>
                This should be searched: {location}
            </div>
            {weatherData ?  <CityCard data={weatherData} /> : <div>Type something the searchbar.</div>}
        </>
    );
}

export default App;
