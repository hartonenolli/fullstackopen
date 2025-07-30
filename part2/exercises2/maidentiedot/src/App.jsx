import { useState, useEffect, use } from 'react'
import axios from 'axios'

const App = () => {
  const [name, setName] = useState('')
  const [filteredCountryList, setFilteredCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    if (selectedCountry) {
      console.log('Selected country:', selectedCountry)
    } else {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          const filteredCountries = response.data.filter(country =>
            country.name.common.toLowerCase().startsWith(name.toLowerCase())
          )

          setFilteredCountryList(filteredCountries)
          //console.log('Filtered countries:', filteredCountries);
        })
        .catch(error => console.error('Error fetching countries:', error))
    }
  }, [selectedCountry, name])

  const handleChange = (event) => {
    setName(event.target.value)
    setSelectedCountry(null)
  }

  const handleShowCountry = (countryName) => {
    setSelectedCountry(countryName)
  }

  return (
    <div>
      <form>
        Find countries
        <input value={name} onChange={handleChange} />
        <br />
        {filteredCountryList.length > 0 && filteredCountryList.length < 11 && (
          <ul>
            {filteredCountryList.map(country => (
              <li key={country.cca3}>
                {country.name.common}
                <button type="button" onClick={() => handleShowCountry(country.name.common)}>
                  show
                </button>
              </li>
            ))}
          </ul>
        )}
        {selectedCountry && (
          <div>
            <h2>{selectedCountry}</h2>
            <p>Details about {selectedCountry} will be displayed here.</p>
          </div>
        )}
        {filteredCountryList.length === 0 && name && (
          <p>No countries found</p>
        )}
        {filteredCountryList.length === 0 && !name && (
          <p>Type a country name to search</p>
        )}
        {filteredCountryList.length > 10 && (
          <p>Too many matches, specify another filter</p>
        )}
      </form>
    </div>
  )
}



export default App