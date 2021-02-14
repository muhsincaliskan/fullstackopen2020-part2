import React from 'react'
import DisplayCountry from './DisplayCountry'
import DisplayFiltered from './DisplayFiltered'
const Filter = ({ countries }) => {

    if (countries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    if (countries.length === 1) {
        return <DisplayCountry country={countries[0]} />
    }
    if (countries.length > 1) {
        return countries.map((country, index) => <DisplayFiltered key={index} country={country} />)
    }
    else
        return <p>Type a country name</p>


}

export default Filter;