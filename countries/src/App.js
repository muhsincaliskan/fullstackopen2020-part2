import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {

        setCountries(response.data)
      })
  }, [])


  const countriesToShow = newFilter === '' ? [] : countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div >
      Find Countries: <input onChange={handleFilterChange} />
      <Filter countries={countriesToShow} />
    </div>
  );
}

export default App;
