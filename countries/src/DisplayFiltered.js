import React, { useState } from 'react'
import DisplayCountry from './DisplayCountry'
const DisplayFiltered = ({ country }) => {

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()
        setIsVisible(!isVisible)
    }

    if (isVisible) {
        return (
            <>
                <DisplayCountry country={country} />
                <button onClick={handleClick}>hide</button>
            </>

        )
    }
    else
        return (
            <>
                <p>{country.name}  <button onClick={handleClick}>show</button></p>
            </>
        )
}

export default DisplayFiltered;