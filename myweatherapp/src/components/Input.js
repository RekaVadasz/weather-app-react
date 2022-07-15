import React, { useState } from 'react'


export default function Input() {

    const [value, setValue] = useState('');


    return (
        <form>
            <input
                className='input'
                placeholder='Search here!'
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
            >
            </input>
        </form>
  )
}
