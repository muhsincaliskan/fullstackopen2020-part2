import React from 'react'

const DisplayCountry = ({ country }) => {
  return (
    <div>
      <h1><b>{country.name}</b></h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {parseInt( country.population).toLocaleString()}</p>
      <h2><b>Languages</b></h2>
      <ul>
        {country.languages.map((language, index) => <li key={index} >{language.name}</li>)}
      </ul>
      <img src={country.flag} alt="" width="256" height="auto"></img>
    </div>)
}
export default DisplayCountry