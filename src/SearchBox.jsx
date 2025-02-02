import { useState } from 'react'
import * as Helper from './helper.js'

export default function SearchBox({ getWeatherInfo }) {

    let [city, setCity] = useState('')
    let[timeAndDate, setTimeAndDate] = useState(Helper.getCurrentTime)

    function handleOnChange(e) {
        setCity(e.target.value)
    }

    async function handleOnSubmit(e) {
        e.preventDefault()
        let weatherInfo = await Helper.fetchWeatherInfo(city)
        getWeatherInfo(weatherInfo)
        setCity('')
    }

    setInterval(()=>{
        setTimeAndDate(Helper.getCurrentTime)
    }, 1000)

    return (
        <>
        <div className='current-time'>
            <p>{timeAndDate}</p>
        </div>
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