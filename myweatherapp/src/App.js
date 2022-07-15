import React, { useState } from 'react';
import CityCard from './components/CityCard';
import Input from './components/Input';


function App() {

    const [location, setLocation] = useState('') //search value, will come from input field

    return (
        <>
            <Input />
            <CityCard />
        </>
    );
}

export default App;
