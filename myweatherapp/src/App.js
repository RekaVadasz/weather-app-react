import React, { useState } from 'react';
import CityCard from './components/CityCard';
import SearchInput from './components/SearchInput';


function App() {

    const [location, setLocation] = useState('') //search value, will come from input field

    const updateSearchTerm = text => {
        setLocation(text)
    }

    console.log(location)

    return (
        <>
            <SearchInput updateSearchTerm={updateSearchTerm}/>
            <div>
                This should be searched: {location}
            </div>
            <CityCard />
        </>
    );
}

export default App;
