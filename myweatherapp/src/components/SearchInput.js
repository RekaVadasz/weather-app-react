import React, { useState } from 'react'


function SearchInput({ updateSearchTerm }) {

    const [value, setValue] = useState(''); //search value given in the input field

    const handleSubmit = e => {
        e.preventDefault(); //prevent default function of form on submit
        if (!value) return; //if value is empty, do nothing (return stops the function)
        updateSearchTerm(value);// here do sth: send value to fetch
        setValue(''); //empty the input field

    };


    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <input
                    className='input'
                    placeholder='Search here!'
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)} 
                >
                </input>
            </form>
            <button onClick={handleSubmit}>Search button</button>
        </div>
  )
}

export default SearchInput
