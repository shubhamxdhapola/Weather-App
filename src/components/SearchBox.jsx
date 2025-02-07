import { useState } from 'react'
import {fetchWeatherInfo} from '../../public/scripts/helper.js'

export default function SearchBox({ getWeatherInfo }) {

    let [city, setCity] = useState('')

    function handleOnChange(e) {
        setCity(e.target.value)
    }

    async function handleOnSubmit(e) {
        e.preventDefault()
        let weatherInfo = await fetchWeatherInfo(city)
        getWeatherInfo(weatherInfo)
        setCity('')
    }

    return (
        <>
        <form onSubmit={handleOnSubmit}>
            <div className="search-form">
                <input
                    type="text"
                    value={city}
                    onChange={handleOnChange}
                    placeholder="Enter city name"
                    className="search-input"
                /> 
                <button 
                    type="submit" 
                    className="search-button"
                    disabled={city === '' ? true : false}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
        </>
    )
}